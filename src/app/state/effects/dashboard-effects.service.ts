import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {
  getBikeStationsError,
  getBikeStationsStart,
  getBikeStationsSuccess
} from '../actions';
import {DashboardService, BikeStation, ApiResponse} from '../../dashboard';
import {DashboardState} from '../reducers';

@Injectable()
export class DashboardEffects {

  getBikeStations$ = createEffect(() => this.actions$.pipe(
      ofType(getBikeStationsStart),
      mergeMap(() => this.dashboardService.loadBikeStations()
        .pipe(
          map((dashboardState: DashboardState) => getBikeStationsSuccess(dashboardState)
          ),
          catchError(() => of(getBikeStationsError()))
        ))
    )
  );

  constructor(
    private actions$: Actions, private dashboardService: DashboardService) {
  }
}
