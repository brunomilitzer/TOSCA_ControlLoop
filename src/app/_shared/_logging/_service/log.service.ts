import { Injectable } from '@angular/core';
import { LogPublisher } from '../_publisher/log-publisher';
import { LogPublisherService } from './log-publisher.service';

// ****************************************************
// Log Level Enumeration
// ****************************************************
export enum LogLevel {
  All = 0,
  Debug = 1,
  Info = 2,
  Warn = 3,
  Error = 4,
  Fatal = 5,
  Off = 6
}

// ****************************************************
// Log Entry Class
// ****************************************************
export class LogEntry {
  // Public properties
  entryDate: Date = new Date();
  message = '';
  level: LogLevel = LogLevel.Debug;
  extraInfo: any[] = [];
  logWithDate = true;

  // Public Methods
  buildToString(): string {
    let value = '';

    if ( this.logWithDate ) {
      value = new Date() + ' - ';
    }

    value += 'Type: ' + LogLevel[this.level];
    value += ' - Message: ' + this.message;

    if ( this.extraInfo.length ) {
      value += ' - Extra Info: ' + this.formatParams( this.extraInfo );
    }

    return value;
  }

  // Private Methods
  private formatParams( params: any[] ): string {
    let newParams = params.join( ',' );

    // Is there at least one object in the array?
    if ( params.some( p => typeof p === 'object' ) ) {
      newParams = '';

      // Build comma-delimited string
      for ( const item of params ) {
        newParams += JSON.stringify( item ) + ',';
      }
    }

    return newParams;
  }
}

// ****************************************************
// Log Service Class
// ****************************************************
@Injectable()
export class LogService {
  level: LogLevel = LogLevel.All;
  logWithDate = true;
  publishers: LogPublisher[];

  constructor( private publishersService: LogPublisherService ) {
    // Set publishers
    this.publishers = this.publishersService.publishers;
  }

  // Public Methods
  debug( msg: string, ...optionalParams: any[] ): void {
    this.writeToLog( msg, LogLevel.Debug, optionalParams );
  }

  warn( msg: string, ...optionalParams: any[] ): void {
    this.writeToLog( msg, LogLevel.Warn, optionalParams );
  }

  error( msg: string, ...optionalParams: any[] ): void {
    this.writeToLog( msg, LogLevel.Error, optionalParams );
  }

  fatal( msg: string, ...optionalParams: any[] ): void {
    this.writeToLog( msg, LogLevel.Fatal, optionalParams );
  }

  log( msg: string, ...optionalParams: any[] ): void {
    this.writeToLog( msg, LogLevel.All, optionalParams );
  }

  // Private Methods
  private shouldLog( level: LogLevel ): boolean {
    let shouldLog = false;

    if ( (level >= this.level && level !== LogLevel.Off) || this.level === LogLevel.All ) {
      shouldLog = true;
    }

    return shouldLog;
  }

  private writeToLog( msg: string, level: LogLevel, params: any[] ): void {
    if ( this.shouldLog( level ) ) {
      const entry: LogEntry = new LogEntry();
      entry.message = msg;
      entry.level = level;
      entry.extraInfo = params;
      entry.logWithDate = this.logWithDate;

      for ( const logger of this.publishers ) {
        logger.log( entry ).subscribe( response => console.log( response ) );
      }
    }
  }
}
