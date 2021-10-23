import {BikeStationsGalleryService} from './bike-stations-gallery.service';
import {of} from 'rxjs';
import {BikeStation} from '../../models/bike-station';

describe('BikeStationsGalleryService', () => {
  let service: BikeStationsGalleryService;
  const httpClientMock = {
    get: jest.fn(() => of([
          {
            img: null,
            id: '27',
            name: 'PL. PARIS',
            lng: 2.649158,
            lat: 39.584186,
            fullAddress: 'Plaça de París, 1, 07010 Palma, Illes Balears',
            street: 'Plaça de París',
            streetNumber: 1,
            cp: '07010',
            town: 'Palma',
            region: 'Illes Balears'
          }
        ]
      )
    )
  };

  beforeEach(() => {
    service = new BikeStationsGalleryService(httpClientMock as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the list of bike stations', done => {
    service.loadBikeStations()
      .subscribe((bikeStations: BikeStation[]) => {
        expect(bikeStations).toMatchSnapshot();
        done();
      });
  });
});
