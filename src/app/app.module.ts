import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LogTestComponent } from './shared/logging/test/log-test.component';

import { BasicAuthInterceptor } from './modules/core/interceptors/basic-auth.interceptor';
import { GlobalErrorInterceptor } from './modules/core/interceptors/global-error.interceptor';
import { HttpErrorInterceptorService } from './modules/core/interceptors/http-error-interceptor.service';

import { StateColorDirective } from './modules/core/directives/state-color.directive';
import { OrderedStateColorDirective } from './modules/core/directives/ordered-state-color.directive';

import { HeaderComponent } from './modules/header/header.component';
import { CommissioningComponent } from './modules/commissioning/commissioning.component';
import { MonitoringComponent } from './modules/monitoring/monitoring.component';
import { ClItemComponent } from './modules/monitoring/cl/cl-item/cl-item.component';
import { ClComponent } from './modules/monitoring/cl/cl.component';
import { AlertComponent } from './shared/alert/component/alert.component';

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
  bootstrap: [ AppComponent ]
} )
export class AppModule {
}
