import { Component, OnInit } from '@angular/core';
import { DataService } from '../../_services/data.service';

@Component( {
  selector: 'tosca-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: [ './monitoring.component.scss' ]
} )
export class MonitoringComponent implements OnInit {
  public isCollapsed = false;

  constructor( private dataService: DataService ) {
  }

  ngOnInit(): void {
    console.log( '======== Monitoring Component Init ========' );
    this.dataService.fetchControlLoopList();
  }
}
