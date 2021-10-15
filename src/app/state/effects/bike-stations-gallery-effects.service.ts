import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {
  getBikeStationsError,
  getBikeStationsStart,
  getBikeStationsSuccess
} from '../actions';
import {BikeStation} from '../../models/bike-station';
import {BikeStationsGalleryService} from '../../bike-stations-gallery/services';

@Injectable()
export class BikeStationsGalleryEffects {
  getBikeStations$ = createEffect(() => this.actions$.pipe(
      ofType(getBikeStationsStart),
      mergeMap(() => this.bikeStationsGalleryService.loadBikeStations()
        .pipe(
          map((bikeStations: BikeStation[]) => getBikeStationsSuccess({
              bikeStations,
            })
          ),
          catchError(() => of(getBikeStationsError()))
        ))
    )
  );

  constructor(
    private actions$: Actions, private bikeStationsGalleryService: BikeStationsGalleryService) {
  }
}
