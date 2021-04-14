import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

import { ClService } from '../../modules/monitoring/services/cl.service';

import { ControlLoopList } from '../../models/cl-list.model';
import { ControlLoopElementList } from '../../models/cl-element-list.model';

const API_URL = environment.apiUrl;

@Injectable( { providedIn: 'root' } )
export class DataService {
  constructor( private http: HttpClient, private clService: ClService ) {
  }

  public fetchControlLoopList(): Observable<ControlLoopList> {
    return this.http.get( `${ API_URL }/instantiation` )
      .pipe(
        map( responseData => {
          return ControlLoopList.fromJSON( responseData );
        } ),
        tap( clList => {
          this.clService.setControlLoopListInstantiation( clList );
        } )
      );
  }

  public fetchControlLoopElements( name: string, version: string ): Observable<ControlLoopElementList> {
    let searchParams = new HttpParams();
    searchParams = searchParams.append( 'name', name );
    searchParams = searchParams.append( 'version', version );

    return this.http.get( `${ API_URL }/monitoring/clelement`, {
      params: searchParams
    } )
      .pipe(
        map( responseData => {
          console.log( 'Response Data: ' + responseData );
          return ControlLoopElementList.fromJSON( responseData );
        } ),
        tap( clElList => {
          console.log( clElList );
          this.clService.setControlLoopElementList( clElList );
        } )
      );
  }
}
