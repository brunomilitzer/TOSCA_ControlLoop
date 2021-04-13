import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ControlLoopElementList } from '../../../models/cl-element-list.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LogService } from '../../../shared/logging/service/log.service';
import { DataService } from '../../../shared/services/data.service';
import { ClService } from './cl.service';

@Injectable( { providedIn: 'root' } )
export class ClElementResolverService implements Resolve<ControlLoopElementList> {

  constructor( private logger: LogService, private dataStorageService: DataService, private clService: ClService ) {
  }

  resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ):
    Observable<ControlLoopElementList> | Promise<ControlLoopElementList> | ControlLoopElementList {
    this.logger.debug( '======== CL Element Resolver ========' );
    const controlLoopList = this.clService.getControlLoopList();
    const controlLoopElementList = this.clService.getControlLoopElementList();

    if ( controlLoopElementList.isEmpty() ) {
      return this.dataStorageService.fetchControlLoopElements( 'PMSHInstance0', '1.0.1' );
    }

    return controlLoopElementList;
  }
}
