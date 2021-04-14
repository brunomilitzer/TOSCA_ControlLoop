import { NgModule } from '@angular/core';
import { MonitoringComponent } from './component/monitoring.component';
import { ClComponent } from './component/cl/cl.component';
import { ClItemComponent } from './component/cl/cl-item/cl-item.component';
import { SharedModule } from '../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from '../../core/core.module';
import { CommonModule } from '@angular/common';
import { ClElementComponent } from './component/clelement/cl-element.component';

@NgModule( {
  declarations: [
    MonitoringComponent,
    ClComponent,
    ClItemComponent,
    ClElementComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    CoreModule,
    SharedModule
  ]
} )
export class MonitoringModule {
}
