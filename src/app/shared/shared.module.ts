import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/component/alert.component';
import { LogTestComponent } from './logging/test/log-test.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from '../core/core.module';

@NgModule( {
  declarations: [
    AlertComponent,
    LogTestComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CoreModule
  ],
  exports: [
    AlertComponent,
    LogTestComponent
  ]
} )
export class SharedModule {
}
