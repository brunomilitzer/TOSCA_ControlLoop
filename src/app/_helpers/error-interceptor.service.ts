import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptorService implements HttpInterceptor {

  intercept( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
    return next.handle( req ).pipe( catchError( err => {
      console.log( '======== Error Interceptor ========' );

      let errorMessage = 'An uknown error occured!';

      if ( !err.error || !err.error.error ) {
        return throwError( errorMessage );
      }

      switch ( err.error.status ) {
        case 401:
          errorMessage = 'Unauthorized!';
          break;
        default:
          errorMessage = 'An uknown error occured!';

      }

      return throwError( errorMessage );
    } ) );
  }

}
