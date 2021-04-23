import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlLoop } from '../../../../../models/cl.model';
import { LogService } from '../../../../../shared/logging/service/log.service';
import { ControlLoopList } from '../../../../../models/cl-list.model';
import { ModalService } from '../../../../../shared/modal/services/modal.service';

@Component( {
  selector: 'tosca-cl-item',
  templateUrl: './cl-item.component.html',
  styleUrls: [ './cl-item.component.scss' ]
} )
export class ClItemComponent implements OnInit, OnDestroy {
  @Input() clList: ControlLoopList;
  @Input() cl: ControlLoop;
  @Input() index: number;
  @Input() id: string;
  @Input() title: string;
  public isCollapsed = false;

  constructor( private logger: LogService, private modalService: ModalService ) {
  }

  ngOnInit(): void {
    this.logger.debug( '======== Cl Item Component Init ========' );
  }

  openModal( id: string ): void {
    this.modalService.open( id );
  }

  closeModal( id: string ): void {
    this.modalService.close( id );
  }

  ngOnDestroy(): void {
    this.logger.debug( '======== Cl Panel Component Destroy ========' );
  }
}
