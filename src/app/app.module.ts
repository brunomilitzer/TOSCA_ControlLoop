import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './views/header/header.component';
import { MonitoringComponent } from './views/monitoring/monitoring.component';
import { CommissioningComponent } from './views/commissioning/commissioning.component';
import { AppRoutingModule } from './app-routing.module';
import { ClItemComponent } from './views/monitoring/cl/cl-item/cl-item.component';
import { ClComponent } from './views/monitoring/cl/cl.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { StateColorDirective } from './_directives/state-color.directive';
import { BasicAuthInterceptorService } from './_helpers/basic-auth-interceptor.service';
import { ErrorInterceptorService } from './_helpers/error-interceptor.service';
import { OrderedStateColorDirective } from './_directives/ordered-state-color.directive';
import { LogTestComponent } from './_shared/_logging/test/log-test.component';
import { LogService } from './_shared/_logging/_service/log.service';
import { LogPublisherService } from './_shared/_logging/_service/log-publisher.service';

@NgModule( {
  declarations: [
    AppComponent,
    LogTestComponent,
    HeaderComponent,
    MonitoringComponent,
    CommissioningComponent,
    ClComponent,
    ClItemComponent,
    StateColorDirective,
    OrderedStateColorDirective
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
    },
    LogService,
    LogPublisherService
  ],
  bootstrap: [ AppComponent ]
} )
export class AppModule {
}
