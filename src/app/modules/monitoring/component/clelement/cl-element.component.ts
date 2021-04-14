import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { ControlLoopElementList } from '../../../../models/cl-element-list.model';
import { LogService } from '../../../../shared/logging/service/log.service';

@Component( {
  selector: 'tosca-cl-element',
  templateUrl: 'cl-element.component.html',
  styleUrls: [ 'cl-element.component.scss' ]
} )
export class ClElementComponent implements OnInit, OnDestroy {
  @Output() isOpened = false;
  private clElList: ControlLoopElementList;

  constructor(
    private logger: LogService,
    private modalService: NgbModal ) {
  }

  ngOnInit(): void {
    this.logger.debug( '======== CL Element Component Init ========' );
  }

  open( clElList: ControlLoopElementList ): void {
    console.log( 'Modal Open' );
    this.isOpened = !this.isOpened;
    console.log( clElList );


  }

  ngOnDestroy(): void {
    this.logger.debug( '======== CL Element Component Destroy ========' );
  }
}
