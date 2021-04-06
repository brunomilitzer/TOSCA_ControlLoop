import { LogEntry } from '../_service/log.service';
import { Observable, of } from 'rxjs';

// ****************************************************
// Log Publisher Abstract Class
// NOTE: This class must be located BEFORE
//       all those that extend this class
// ****************************************************
export abstract class LogPublisher {
  location: string;

  abstract log( record: LogEntry ): Observable<boolean>;

  abstract clear(): Observable<boolean>;

}

// ****************************************************
// Log Console Class
// ****************************************************
export class LogConsole extends LogPublisher {

  clear(): Observable<boolean> {
    console.clear();
    return of( true );
  }

  log( entry: LogEntry ): Observable<boolean> {
    // Log to console
    console.log( entry.buildToString() );
    return of( true );
  }

}

