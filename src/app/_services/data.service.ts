import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ClService } from './cl.service';
import { map, tap } from 'rxjs/operators';
import { ControlLoopList } from '../_models/cl-list.model';

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
          this.clService.setControlLoopListInstatiation( clList );
        } )
      );
  }
}
