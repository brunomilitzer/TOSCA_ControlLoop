import { ControlLoop } from './cl.model';

export interface IControlLoops {
  controlLoopList: ControlLoop[];
}

export class ControlLoopList {
  private controlLoops: ControlLoop[] = [];

  public get length(): number {
    return this.controlLoops.length;
  }

  public set push( cl: ControlLoop ) {
    this.controlLoops.push( cl );
  }

  public get cls(): ControlLoop[] {
    return this.controlLoops;
  }

  public jsonToCLS(icls: IControlLoops ): void {
    console.log('======== Converting JSON File ========');
    this.controlLoops = icls.controlLoopList;
  }

  public print(): void {
    if (this.controlLoops) {
      console.log('======== Printing ControlLoop List ========');
      console.log(this.controlLoops);
    }
  }

  public clear(): void {
    this.controlLoops = [];
  }
}
