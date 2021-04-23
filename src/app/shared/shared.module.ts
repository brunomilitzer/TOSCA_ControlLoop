import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/component/alert.component';
import { LogTestComponent } from './logging/test/log-test.component';
import { ModalComponent } from './modal/component/modal.component';

@NgModule( {
  declarations: [
    AlertComponent,
    LogTestComponent,
    ModalComponent
  ],
  imports: [ CommonModule ],
  exports: [
    AlertComponent,
    LogTestComponent,
    ModalComponent
  ]
} )
export class SharedModule {
}
