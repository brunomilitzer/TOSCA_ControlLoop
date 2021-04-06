import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommissioningComponent } from './views/commissioning/commissioning.component';
import { MonitoringComponent } from './views/monitoring/monitoring.component';
import { ClResolverService } from './_services/cl-resolver.service';

const toscaRoutes: Routes = [
  { path: '', redirectTo: '/monitoring', pathMatch: 'full' },
  { path: 'commissioning', component: CommissioningComponent },
  { path: 'monitoring', component: MonitoringComponent, resolve: [ ClResolverService ] },
];

@NgModule( {
  imports: [ RouterModule.forRoot( toscaRoutes ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule {
}
