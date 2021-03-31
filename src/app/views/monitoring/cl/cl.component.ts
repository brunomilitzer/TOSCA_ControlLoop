import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ControlLoopList } from '../../../_models/cl-list.model';
import { ClService } from '../../../_services/cl.service';

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
        console.log( 'hello world' );
        this.clList = clList;
      }
    );

    this.clList = this.clService.getControlLoopList();
  }

  ngAfterViewInit(): void {
    this.cd.detectChanges();
  }

  numberToLetterConverter( num: number ): string {
    const newNum = num + 65;

    return String.fromCharCode( newNum );
  }

  ngOnDestroy(): void {
    console.log( '======== CL Component Destroy ========' );
    this.clsSubscription.unsubscribe();
  }

}
