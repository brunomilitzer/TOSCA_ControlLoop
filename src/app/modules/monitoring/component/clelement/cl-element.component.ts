import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { ClService } from '../../services/cl.service';
import { ControlLoopElementList } from '../../../../models/cl-element-list.model';
import { LogService } from '../../../../shared/logging/service/log.service';
import { Subscription } from 'rxjs';

@Component( {
  selector: 'tosca-cl-element',
  templateUrl: 'cl-element.component.html',
  styleUrls: [ 'cl-element.component.scss' ]
} )
export class ClElementComponent implements OnInit, OnDestroy {
  @Output() isOpened = false;
  clElSubscription: Subscription;
  clElList: ControlLoopElementList;

  constructor(
    private logger: LogService,
    private modalService: NgbModal,
    private clElService: ClService ) {
  }

  ngOnInit(): void {
    this.logger.debug( '======== CL Element Component Init ========' );
    this.clElSubscription = this.clElService.clElChanged.subscribe(
      ( clElList: ControlLoopElementList ) => {
        this.clElList = clElList;
      } );

    this.clElList = this.clElService.getControlLoopElementList();
  }

  open( id: string ): void {
    console.log( 'Modal Open' );
    const clEl = this.clElList.getClElById( id );
    console.log( clEl );
    this.isOpened = !this.isOpened;
  }

  ngOnDestroy(): void {
    this.clElSubscription.unsubscribe();
  }
}
