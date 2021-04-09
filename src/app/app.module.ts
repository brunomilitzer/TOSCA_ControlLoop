import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LogTestComponent } from './shared/logging/test/log-test.component';

import { HeaderComponent } from './modules/header/component/header.component';
import { CommissioningComponent } from './modules/commissioning/component/commissioning.component';
import { MonitoringComponent } from './modules/monitoring/component/monitoring.component';
import { ClItemComponent } from './modules/monitoring/component/cl/cl-item/cl-item.component';
import { ClComponent } from './modules/monitoring/component/cl/cl.component';
import { AlertComponent } from './shared/alert/component/alert.component';
import { GlobalErrorInterceptor } from './core/interceptors/global-error.interceptor';
import { BasicAuthInterceptor } from './core/interceptors/basic-auth.interceptor';
import { HttpErrorInterceptorService } from './core/interceptors/http-error-interceptor.service';
import { OrderedStateColorDirective } from './core/directives/ordered-state-color.directive';
import { StateColorDirective } from './core/directives/state-color.directive';

@NgModule( {
  declarations: [
    AppComponent,
    AlertComponent,
    StateColorDirective,
    OrderedStateColorDirective,
    LogTestComponent,
    HeaderComponent,
    CommissioningComponent,
    MonitoringComponent,
    ClComponent,
    ClItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [
    [
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
  ],
  bootstrap: [ AppComponent ]
} )
export class AppModule {
}
