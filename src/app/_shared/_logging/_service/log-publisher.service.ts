import { LogConsole, LogLocalStorage, LogPublishers } from '../_publisher/log-publishers';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

const PUBLISHERS_FILE = '/assets/log-publishers.json';

// ****************************************************
// Log Publisher Config Definition Class
// ****************************************************
class LogPublisherConfig {
  loggerName: string;
  loggerLocation: string;
  isActive: boolean;

  static fromJSON( data: any ): LogPublisherConfig[] {
    const logConfigs: LogPublisherConfig[] = [];

    data.forEach( ( config: LogPublisherConfig ) => {
      logConfigs.push( config );
    } );

    return logConfigs;
  }
}


@Injectable()
export class LogPublisherService {

  // Public properties
  publishers: LogPublishers[] = [];

  constructor( private http: HttpClient ) {
    // Build publisher arrays
    this.buildPublishers();
  }

  // Build publisher arrays
  buildPublishers(): void {
    let logPub: LogPublishers;

    this.getLoggers().subscribe( response => {
      for ( const pub of response.filter( p => p.isActive ) ) {
        switch ( pub.loggerName.toLowerCase() ) {
          case 'console':
            logPub = new LogConsole();
            break;
          case 'localstorage':
            logPub = new LogLocalStorage();
            break;
        }

        // Set location of logging
        logPub.location = pub.loggerLocation;

        // Add publisher to array
        this.publishers.push( logPub );
      }
    } );
  }

  getLoggers(): Observable<LogPublisherConfig[]> {
    return this.http.get<LogPublisherConfig>( PUBLISHERS_FILE ).pipe( map( responseData => {
      return LogPublisherConfig.fromJSON( responseData );
    } ), catchError( this.handleErrors ) );
  }

  private handleErrors( error: any ): Observable<any> {
    const errors: string[] = [];
    let msg = '';

    msg = 'Status: ' + error.status;
    msg += ' - Status Text: ' + error.statusText;

    if ( error.json() ) {
      msg += ' - Exception Message: ' + error.json().exceptionMessage;
    }

    errors.push( msg );
    console.log( 'An error occurred', errors );

    return throwError( errors );
  }
}

