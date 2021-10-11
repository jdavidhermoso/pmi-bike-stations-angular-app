import {DashboardService} from './dashboard.service';
import {of} from 'rxjs';
import {DashboardState} from '../../state/reducers';
import {apiResponseDataMock} from '../models/BE/mocks/api-response.mock';

describe('DashboardService', () => {
  let service: DashboardService;
  const httpClientMock = {
    get: jest.fn(() => of(apiResponseDataMock))
  };

  beforeEach(() => {
    service = new DashboardService(httpClientMock as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the list of bike stations', done => {
    service.loadBikeStations()
      .subscribe((dashboardState: DashboardState) => {
        expect(dashboardState).toMatchSnapshot();
        done();
      });
  });
});
