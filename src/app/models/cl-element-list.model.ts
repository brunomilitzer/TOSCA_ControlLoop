import { ControlLoopElementStatistic } from './cl-element-statistic.model';

export class ControlLoopElementList {
  private controlLoopElementStatistics: ControlLoopElementStatistic[] = [];

  public static fromJSON( data: any ): ControlLoopElementList {
    const clElList: ControlLoopElementList = new ControlLoopElementList();
    data.clElementStatistics.forEach( ( newClEl: ControlLoopElementStatistic ) => {
      clElList.push( newClEl );
    } );

    return clElList;
  }

  public get length(): number {
    return this.controlLoopElementStatistics.length;
  }

  public get clElStats(): ControlLoopElementStatistic[] {
    return this.controlLoopElementStatistics;
  }

  public get clElStat(): ControlLoopElementStatistic {
    const size = this.controlLoopElementStatistics.length;

    return this.controlLoopElementStatistics[size - 1];
  }

  private push( newClEl: ControlLoopElementStatistic ): void {
    this.controlLoopElementStatistics.push( newClEl );
  }

  public isEmpty(): boolean {
    return this.controlLoopElementStatistics.length === 0;
  }

  public clear(): void {
    this.controlLoopElementStatistics = [];
  }
}
