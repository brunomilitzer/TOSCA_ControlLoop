import { Component, OnInit } from '@angular/core';
import { DataService } from '../../_services/data.service';
import { LogService } from '../../_shared/_logging/_service/log.service';

@Component( {
  selector: 'tosca-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: [ './monitoring.component.scss' ]
} )
export class MonitoringComponent implements OnInit {
  public isCollapsed = false;

  constructor( private logger: LogService, private dataService: DataService ) {
  }

  ngOnInit(): void {
    this.logger.debug( '======== Monitoring Component Init ========' );
    this.dataService.fetchControlLoopList();
  }
}
