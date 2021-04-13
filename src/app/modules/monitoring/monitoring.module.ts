import { NgModule } from '@angular/core';
import { MonitoringComponent } from './component/monitoring.component';
import { ClComponent } from './component/cl/cl.component';
import { ClItemComponent } from './component/cl/cl-item/cl-item.component';
import { SharedModule } from '../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from '../../core/core.module';
import { ClElementComponent } from './component/clelement/cl-element.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

@NgModule( {
  declarations: [
    MonitoringComponent,
    ClComponent,
    ClItemComponent,
    ClElementComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    CoreModule,
    SharedModule
  ]
} )
export class MonitoringModule {
}
