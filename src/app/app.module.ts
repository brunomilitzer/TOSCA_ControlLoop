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
import { SateColorDirective } from './_directives/sate-color.directive';
import { BasicAuthInterceptorService } from './_helpers/basic-auth-interceptor.service';
import { ErrorInterceptorService } from './_helpers/error-interceptor.service';

@NgModule( {
  declarations: [
    AppComponent,
    HeaderComponent,
    MonitoringComponent,
    CommissioningComponent,
    ClComponent,
    ClItemComponent,
    SateColorDirective
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
    } ],
  bootstrap: [ AppComponent ]
} )
export class AppModule {
}
