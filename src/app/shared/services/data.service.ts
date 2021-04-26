import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map, tap } from 'rxjs/operators';
import { ControlLoopList } from '../../models/cl-list.model';
import { ClService } from '../../modules/monitoring/services/cl.service';
import { ControlLoopElementList } from '../../models/cl-element-list.model';

const API_URL = environment.apiUrl;
const CLEL_URL = 'http://localhost:4200/assets/cl-element-statistics.json';

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
          this.clService.setControlLoopListInstatiation( clList );
        } )
      );
  }

  public fetchControlLoopElementList(): Observable<ControlLoopElementList> {
    return this.http.get( CLEL_URL )
      .pipe(
        map( responseData => {
          return ControlLoopElementList.fromJSON( responseData );
        } ),
        tap( clElList => {
          this.clService.setControlLoopElementList( clElList );
        } )
      );
  }
}
