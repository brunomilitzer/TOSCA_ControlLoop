import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { BasicAuthInterceptorService } from './_helpers/basic-auth-interceptor.service';
import { ErrorInterceptorService } from './_helpers/error-interceptor.service';

import { StateColorDirective } from './_directives/state-color.directive';
import { OrderedStateColorDirective } from './_directives/ordered-state-color.directive';

import { AlertComponent } from './_shared/_alert/alert.component';
import { LogTestComponent } from './_shared/_logging/test/log-test.component';

import { HeaderComponent } from './views/header/header.component';
import { CommissioningComponent } from './views/commissioning/commissioning.component';
import { MonitoringComponent } from './views/monitoring/monitoring.component';
import { ClItemComponent } from './views/monitoring/cl/cl-item/cl-item.component';
import { ClComponent } from './views/monitoring/cl/cl.component';

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
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: BasicAuthInterceptorService,
    multi: true
  },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true
    }
  ],
  bootstrap: [ AppComponent ]
} )
export class AppModule {
}
