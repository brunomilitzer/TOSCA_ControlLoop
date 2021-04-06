import { ControlLoop } from './cl.model';

export class ControlLoopList {
  private controlLoops: ControlLoop[] = [];

  static fromJSON( data: any ): ControlLoopList {
    const clList: ControlLoopList = new ControlLoopList();
    data.controlLoopList.forEach( ( newCL: ControlLoop ) => {
      clList.push( newCL );
    } );

    return clList;
  }

  public get length(): number {
    return this.controlLoops.length;
  }

  public get cls(): ControlLoop[] {
    return this.controlLoops;
  }

  public push( cl: ControlLoop ): void {
    this.controlLoops.push( cl );
  }

  public isEmpty(): boolean {
    return this.cls.length === 0;
  }

  public clear(): void {
    this.controlLoops = [];
  }
}
