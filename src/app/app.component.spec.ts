import {AppComponent} from './app.component';
import {of} from 'rxjs';
import {BikeStation} from './models/bike-station';

const deviceDetectorMock = {
  isDesktop: () => true
};

describe('AppComponent', () => {
  const bikeStation: BikeStation = {
    img: '003.jpeg',
    type: 'anchor',
    id: '01',
    name: 'PLAÇA DELS PATINS',
    lng: 2.659399509,
    lat: 39.56590061,
    kmToCityCenter: 3
  };
  let component: AppComponent;
  const mockStore = {
    dispatch: jest.fn(),
    pipe: jest.fn(() => of(bikeStation)
    )
  };

  beforeEach(() => {
    component = new AppComponent(deviceDetectorMock as any, mockStore as any);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', done => {
    mockStore.pipe().subscribe((selectedBikeStation) => {
      expect(selectedBikeStation).toStrictEqual(bikeStation);
      done();
    });
  });

  it('onCloseBikeStationInfo: should dispatch closeBikeStationInfo', () => {
    component.onCloseBikeStationInfo();

    expect(mockStore.dispatch).toHaveBeenCalled();
  });
});
