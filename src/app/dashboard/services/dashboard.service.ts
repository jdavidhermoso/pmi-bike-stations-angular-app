import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiResponse} from '../models';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {DashboardState} from '../../state/reducers';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) {
  }

  public loadBikeStations(): Observable<DashboardState> {
    return this.http.get<ApiResponse>('https://api.bsmsa.eu/ext/api/bsm/gbfs/v2/en/station_information')
      .pipe(
        map((apiResponse: ApiResponse) => {
            return {
              bikeStations: apiResponse.data?.stations
            };
          }
        )
      );
  }
}
