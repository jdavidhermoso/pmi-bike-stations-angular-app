import {Injectable} from '@angular/core';
import {combineLatest, forkJoin, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {BikeStation} from '../../models/bike-station';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../models/app.state';
import {selectBikeStations, selectFilters} from '../../state/reducers';
import {map} from 'rxjs/operators';
import {Filters} from '../../models/filters';

@Injectable({
  providedIn: 'root'
})
export class BikeStationsGalleryService {

  constructor(private http: HttpClient) {
  }

  public loadBikeStations(): Observable<BikeStation[]> {
    return this.http.get<BikeStation[]>('assets/bike-stations.json');
  }
}
