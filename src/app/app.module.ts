import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LogTestComponent } from './modules/shared/logging/test/log-test.component';

import { HeaderComponent } from './modules/header/header.component';
import { CommissioningComponent } from './modules/commissioning/commissioning.component';
import { MonitoringComponent } from './modules/monitoring/component/monitoring.component';
import { ClItemComponent } from './modules/monitoring/component/cl/cl-item/cl-item.component';
import { ClComponent } from './modules/monitoring/component/cl/cl.component';
import { AlertComponent } from './modules/shared/alert/component/alert.component';
import { CoreModule } from './modules/core/core.module';

@NgModule( {
  declarations: [
    AppComponent,
    AlertComponent,
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
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
} )
export class AppModule {
}
