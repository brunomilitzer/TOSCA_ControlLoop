import { ControlLoopElement } from './cl-element.model';

export class ControlLoopElementList {

  private clElements: ControlLoopElement[] = [];

  static fromJSON( data: any ): ControlLoopElementList {
    const clElementList: ControlLoopElementList = new ControlLoopElementList();
    data.clElementStatistics.forEach( ( newCel: ControlLoopElement ) => {
      clElementList.push( newCel );
    } );

    return clElementList;
  }

  public length(): number {
    return this.clElements.length;
  }

  public get clEl(): ControlLoopElement[] {
    return this.clElements;
  }

  public getClElById( id: string ): ControlLoopElement {
    return this.clElements.filter( clEl => clEl.id === id )[0];
  }

  public push( clEl: ControlLoopElement ): void {
    this.clElements.push( clEl );
  }

  public isEmpty(): boolean {
    return this.clEl.length === 0;
  }

  public clear(): void {
    this.clElements = [];
  }

}
