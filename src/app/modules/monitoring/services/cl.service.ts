import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ControlLoopList } from '../../../models/cl-list.model';
import { ControlLoopElementList } from '../../../models/cl-element-list.model';

@Injectable( { providedIn: 'root' } )
export class ClService {
  public clsChanged = new Subject<ControlLoopList>();
  private clList: ControlLoopList = new ControlLoopList();

  public clElChanged = new Subject<ControlLoopElementList>();
  private clElList: ControlLoopElementList = new ControlLoopElementList();

  constructor() {
  }

  public setControlLoopListInstantiation( clList: ControlLoopList ): void {
    this.clList = clList;
    this.clsChanged.next( this.clList );
  }

  public getControlLoopList(): ControlLoopList {
    return this.clList;
  }

  public setControlLoopElementList( clElList: ControlLoopElementList ): void {
    this.clElList = clElList;
    this.clElChanged.next( this.clElList );
  }

  public getControlLoopElementList(): ControlLoopElementList {
    return this.clElList;
  }
}
