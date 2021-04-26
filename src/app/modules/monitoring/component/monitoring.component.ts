import { Component, OnDestroy, OnInit } from '@angular/core';
import { LogService } from '../../../shared/logging/service/log.service';
import { DataService } from '../../../shared/services/data.service';
import { ControlLoopElementList } from '../../../models/cl-element-list.model';
import { Subscription } from 'rxjs';

@Component( {
  selector: 'tosca-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: [ './monitoring.component.scss' ]
} )
export class MonitoringComponent implements OnInit, OnDestroy {
  public isCollapsed = false;
  public clElSubscription: Subscription;
  public clElList: ControlLoopElementList;

  constructor( private logger: LogService, private dataService: DataService ) {
  }

  ngOnInit(): void {
    this.logger.debug( '======== Monitoring Component Init ========' );
    this.dataService.fetchControlLoopList();

    this.clElSubscription = this.dataService.fetchControlLoopElementList().subscribe( ( clElList: ControlLoopElementList ) => {
      this.clElList = clElList;
    } );

  }

  ngOnDestroy(): void {
    this.logger.debug( '======== Monitoring Component Destroy ========' );
    this.clElSubscription.unsubscribe();
  }
}
