import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlLoop } from '../../../../_models/cl.model';

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

  ngOnInit(): void {
    console.log( '======== Cl Item Component Init ========' );
  }

  ngOnDestroy(): void {
    console.log( '======== Cl Panel Component Destroy ========' );
  }
}
