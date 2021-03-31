import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const USERNAME = environment.username;
const PASSWORD = environment.password;

@Injectable()
export class BasicAuthInterceptorService implements HttpInterceptor {

  intercept( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
    console.log( '======== Basic Auth Interceptor ========' );

    const modReq = req.clone( {
      setHeaders: {
        Authorization: 'Basic ' + btoa( USERNAME + ':' + PASSWORD )
      },
      withCredentials: true
    } );

    return next.handle( modReq );
  }
}
