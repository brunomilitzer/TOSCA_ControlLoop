import { Component, OnDestroy, OnInit } from '@angular/core';
import { LogService } from '../../../shared/logging/service/log.service';
import { DataService } from '../../../shared/services/data.service';
import { ControlLoopList } from '../../../models/cl-list.model';
import { Subscription } from 'rxjs';

@Component( {
  selector: 'tosca-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: [ './monitoring.component.scss' ]
} )
export class MonitoringComponent implements OnInit, OnDestroy {
  public isCollapsed = false;

  private clListSubscription: Subscription;
  private clList: ControlLoopList;

  constructor( private logger: LogService, private dataService: DataService ) {
  }

  ngOnInit(): void {
    this.logger.debug( '======== Monitoring Component Init ========' );
    this.clListSubscription = this.dataService.fetchControlLoopList().subscribe( ( clList: ControlLoopList ) => {
      this.clList = clList;
    } );

    console.log( this.clList );
  }

  ngOnDestroy(): void {
    this.logger.debug( '======== Monitoring Component Destroy ========' );
    this.clListSubscription.unsubscribe();
  }
}
