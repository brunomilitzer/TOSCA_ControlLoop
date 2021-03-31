import { ControlLoop } from './cl.model';

export class ControlLoopList {
  private controlLoops: ControlLoop[] = [];

  public get length(): number {
    return this.controlLoops.length;
  }

  public get cls(): ControlLoop[] {
    return this.controlLoops;
  }

  public push( cl: ControlLoop ): void {
    this.controlLoops.push( cl );
  }

  public print(): void {
    if ( this.controlLoops ) {
      console.log( '======== Printing ControlLoop List ========' );
      console.log( this.controlLoops );
    }
  }

  public isEmpty(): boolean {
    return this.length === 0;
  }

  public clear(): void {
    this.controlLoops = [];
  }
}
