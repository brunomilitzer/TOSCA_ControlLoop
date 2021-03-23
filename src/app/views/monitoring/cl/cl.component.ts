import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ControlLoopList } from '../../../models/cl-list.model';
import { ClService } from '../../../services/cl.service';

@Component( {
  selector: 'app-cl-component',
  templateUrl: './cl.component.html',
  styleUrls: [ './cl.component.scss' ]
} )
export class ClComponent implements OnInit, AfterViewInit, OnDestroy {
  public clsSubscription: Subscription;
  public clList: ControlLoopList;

  constructor( private clService: ClService, private cd: ChangeDetectorRef ) {
  }

  ngOnInit(): void {
    console.log( '======== CL Component Init ========' );
    this.clsSubscription = this.clService.clsChanged.subscribe(
      ( clList: ControlLoopList ) => {
        this.clList = clList;
      }
    );

    this.clList = this.clService.getControlLoopList();
  }

  ngAfterViewInit(): void {
    this.cd.detectChanges();
  }

  ngOnDestroy(): void {
    console.log( '======== CL Component Destroy ========' );
    this.clsSubscription.unsubscribe();
  }

}
