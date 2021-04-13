import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { ControlLoopList } from '../../models/cl-list.model';
import { ClService } from '../../modules/monitoring/services/cl.service';
import { ControlLoopElementList } from '../../models/cl-element-list.model';

const API_URL = environment.apiUrl;
const CL_INSTANTIATION_OFFLINE = 'http://localhost:4200/assets/cl-instantiations.json';
const CL_ELEMENT_OFFLINE = 'http://localhost:4200/assets/cl-elements.json';

@Injectable( { providedIn: 'root' } )
export class DataService {
  constructor( private http: HttpClient, private clService: ClService ) {
  }

  public fetchControlLoopList(): Observable<ControlLoopList> {
    return this.http.get( CL_INSTANTIATION_OFFLINE )
      .pipe(
        map( responseData => {
          return ControlLoopList.fromJSON( responseData );
        } ),
        tap( clList => {
          this.clService.setControlLoopListInstantiation( clList );
        } )
      );
  }

  public fetchControlLoopElements(): Observable<ControlLoopElementList> {
    console.log( 'Fetching Elements' );
    return this.http.get( CL_ELEMENT_OFFLINE )
      .pipe(
        map( responseData => {
          console.log( 'Response Data: ' + responseData );
          return new ControlLoopElementList();
        } ),
        tap( clElList => {
          console.log( clElList );
          this.clService.setControlLoopElementList( clElList );
        } ),
        catchError( errorResponse => {
          console.log( errorResponse );
          return throwError( errorResponse );
        } )
      );
  }
}
