import { ErrorHandler, NgModule } from '@angular/core';
import { GlobalErrorInterceptor } from './interceptors/global-error.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BasicAuthInterceptor } from './interceptors/basic-auth.interceptor';
import { HttpErrorInterceptorService } from './interceptors/http-error-interceptor.service';
import { StateColorDirective } from './directives/state-color.directive';
import { OrderedStateColorDirective } from './directives/ordered-state-color.directive';

@NgModule( {
  declarations: [
    StateColorDirective,
    OrderedStateColorDirective,
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorInterceptor
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BasicAuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptorService,
      multi: true
    }
  ],
  exports: [
    StateColorDirective,
    OrderedStateColorDirective
  ]
} )
export class CoreModule {
}
