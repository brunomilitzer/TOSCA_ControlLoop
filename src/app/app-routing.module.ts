import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommissioningComponent } from './views/commissioning/commissioning.component';
import { MonitoringComponent } from './views/monitoring/monitoring.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/monitoring', pathMatch: 'full' },
  { path: 'commissioning', component: CommissioningComponent },
  { path: 'monitoring', component: MonitoringComponent },
];

@NgModule( {
  imports: [ RouterModule.forRoot( appRoutes ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule {
}
