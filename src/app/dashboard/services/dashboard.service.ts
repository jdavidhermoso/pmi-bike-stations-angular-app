import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {BikeStation} from '../models/bike-station';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) {
  }

  public loadBikeStations(): Observable<BikeStation[]> {
    return this.http.get<BikeStation[]>('assets/bike-stations.json');
  }
}
