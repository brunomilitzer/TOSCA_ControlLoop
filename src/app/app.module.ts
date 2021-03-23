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

@NgModule( {
  declarations: [
    AppComponent,
    HeaderComponent,
    MonitoringComponent,
    CommissioningComponent,
    ClComponent,
    ClItemComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
} )
export class AppModule {
}
