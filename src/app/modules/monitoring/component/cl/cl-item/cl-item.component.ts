import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlLoop } from '../../../../../models/cl.model';
import { LogService } from '../../../../../shared/logging/service/log.service';
import { DataService } from '../../../../../shared/services/data.service';
import { ControlLoopElementList } from '../../../../../models/cl-element-list.model';
import { ClService } from '../../../services/cl.service';
import { Subscription } from 'rxjs';

@Component( {
  selector: 'tosca-cl-item',
  templateUrl: './cl-item.component.html',
  styleUrls: [ './cl-item.component.scss' ]
} )
export class ClItemComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() cl: ControlLoop;
  @Input() index: number;
  @Input() id: string;
  @Input() title: string;
  public isCollapsed = false;

  private clElementSubscription: Subscription;
  clElementList: ControlLoopElementList;

  constructor( private logger: LogService, private dataService: DataService, private clService: ClService ) {
  }

  ngOnInit(): void {
    this.logger.debug( '======== Cl Item Component Init ========' );
  }

  ngAfterViewInit(): void {
    this.clElementSubscription = this.dataService.fetchControlLoopElements( this.cl.name, this.cl.version )
      .subscribe( ( clElementList: ControlLoopElementList ) => {
        this.clElementList = clElementList;
      } );
  }

  ngOnDestroy(): void {
    this.logger.debug( '======== Cl Panel Component Destroy ========' );
    this.clElementSubscription.unsubscribe();
  }
}
