import { Directive, ElementRef, HostBinding, Input, OnInit, Renderer2 } from '@angular/core';
import { ControlLoopState } from '../models/enums/cl-state.enum';

@Directive( {
  selector: '[appStateColor]'
} )
export class SateColorDirective implements OnInit {
  @HostBinding( 'class' ) elementClass = 'btn btn-unitialised';
  @Input() state: ControlLoopState;

  constructor( private elRef: ElementRef, private renderer: Renderer2 ) {
  }

  ngOnInit(): void {
    console.log( this.state );
    this.renderer.addClass( this.elRef.nativeElement, this.getStatus() );
  }

  private getStatus(): string {
    switch ( this.state ) {
      case ControlLoopState.UNINITIALISED:
        console.log( 'Unitialised' );
        return 'btn btn-unitialised';
      case ControlLoopState.PASSIVE:
        console.log( 'Passive' );
        return 'btn-passive';
      case ControlLoopState.RUNNING:
        console.log( 'Running' );
        return 'btn-running';
      default:
        return 'btn-unitialised';
    }
  }

}
