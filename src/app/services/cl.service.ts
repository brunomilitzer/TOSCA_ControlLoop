import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ControlLoopList } from '../models/cl-list.model';
import clJSON from '../../assets/offline/ControlLoops.json';

@Injectable( { providedIn: 'root' } )
export class ClService {
  public clsChanged = new Subject<ControlLoopList>();
  private clList: ControlLoopList = new ControlLoopList();

  constructor() {
    this.populateControlLoop();
  }

  public getControlLoopList(): ControlLoopList {
    console.log( '======== Fetching Control Loop List ========' );
    return this.clList;
  }

  private populateControlLoop(): void {
    console.log( '======== Populating ControlLoop ========' );
    this.clList.jsonToCLS( clJSON );
    this.clList.print();
  }
}
