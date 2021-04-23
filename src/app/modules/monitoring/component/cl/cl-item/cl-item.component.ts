import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlLoop } from '../../../../../models/cl.model';
import { LogService } from '../../../../../shared/logging/service/log.service';
import { ControlLoopList } from '../../../../../models/cl-list.model';
import { ModalService } from '../../../../../shared/modal/services/modal.service';
import { ClService } from '../../../services/cl.service';
import { ControlLoopElementList } from '../../../../../models/cl-element-list.model';

@Component( {
  selector: 'tosca-cl-item',
  templateUrl: './cl-item.component.html',
  styleUrls: [ './cl-item.component.scss' ]
} )
export class ClItemComponent implements OnInit, OnDestroy {
  @Input() clList: ControlLoopList;
  @Input() cl: ControlLoop;
  @Input() index: number;

  public isCollapsed = false;
  private clElList: ControlLoopElementList;

  constructor( private logger: LogService, private modalService: ModalService, private clService: ClService ) {
  }

  ngOnInit(): void {
    this.logger.debug( '======== Cl Item Component Init ========' );
    this.clElList = this.clService.getControlLoopElementList();
  }

  openModal( id: any ): void {
    console.log( id );
    this.modalService.open( id );
  }

  closeModal( id: string ): void {
    this.modalService.close( id );
  }

  ngOnDestroy(): void {
    this.logger.debug( '======== Cl Panel Component Destroy ========' );
  }
}
