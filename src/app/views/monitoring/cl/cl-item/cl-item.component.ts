import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlLoop } from '../../../../models/cl.model';

@Component( {
  selector: 'app-cl-item',
  templateUrl: './cl-item.component.html',
  styleUrls: [ './cl-item.component.scss' ]
} )
export class ClItemComponent implements OnInit, OnDestroy {
  @Input() cl: ControlLoop;
  @Input() index: number;
  @Input() id: string;
  @Input() title: string;

  constructor( private cd: ChangeDetectorRef ) {
  }

  ngOnInit(): void {
    console.log( '======== Cl Item Component Init ========' );
    console.log( this.cl );
  }

  ngOnDestroy(): void {
    console.log( '======== Cl Panel Component Destroy ========' );
  }
}
