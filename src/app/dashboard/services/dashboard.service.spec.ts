import {DashboardService} from './dashboard.service';
import {of} from 'rxjs';
import {BikeStation} from '../models/bike-station';

describe('DashboardService', () => {
  let service: DashboardService;
  const httpClientMock = {
    get: jest.fn(() => of([
        {
          img: '001.jpeg',
          type: 'anchor',
          id: '01',
          name: 'PARC DE SES VELES',
          lng: 2.659399509,
          lat: 39.56590061
        }]
      )
    )
  };

  beforeEach(() => {
    service = new DashboardService(httpClientMock as any);
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
