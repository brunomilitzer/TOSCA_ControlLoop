import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ControlLoopList } from '../_models/cl-list.model';
import { ControlLoop } from '../_models/cl.model';

@Injectable( { providedIn: 'root' } )
export class ClService {
  public clsChanged = new Subject<ControlLoopList>();
  private clList: ControlLoopList = new ControlLoopList();

  constructor() {
  }

  public setControlLoopListInstatiation( clList: ControlLoop[] ): void {
    console.log( typeof clList === 'object' );
    if ( clList instanceof ControlLoopList ) {
      this.clList = new ControlLoopList();
      this.clsChanged.next( this.clList );
    }
  }

  public getControlLoopList(): ControlLoopList {
    return this.clList;
  }
}
