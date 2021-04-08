import { ErrorHandler, Injectable } from '@angular/core';
import { LogService } from '../../../shared/logging/service/log.service';

@Injectable()
export class GlobalErrorInterceptor implements ErrorHandler {

  constructor( private logger: LogService ) {
  }

  handleError( error: any ): void {

    this.logger.error( '======== Global Error Interceptor ========' );
    this.logger.error( error.message );
  }
}
