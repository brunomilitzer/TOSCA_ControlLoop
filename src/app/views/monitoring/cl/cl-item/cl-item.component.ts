import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlLoop } from '../../../../_models/cl.model';
import { LogService } from '../../../../_shared/_logging/_service/log.service';

@Component( {
  selector: 'tosca-cl-item',
  templateUrl: './cl-item.component.html',
  styleUrls: [ './cl-item.component.scss' ]
} )
export class ClItemComponent implements OnInit, OnDestroy {
  @Input() cl: ControlLoop;
  @Input() index: number;
  @Input() id: string;
  @Input() title: string;
  public isCollapsed = false;

  constructor( private logger: LogService ) {
  }

  ngOnInit(): void {
    this.logger.debug( '======== Cl Item Component Init ========' );
  }

  ngOnDestroy(): void {
    this.logger.debug( '======== Cl Panel Component Destroy ========' );
  }
}
