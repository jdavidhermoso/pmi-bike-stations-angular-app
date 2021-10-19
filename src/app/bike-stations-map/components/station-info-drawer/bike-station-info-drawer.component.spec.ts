import {BikeStationInfoDrawerComponent} from './bike-station-info-drawer.component';

describe('StationInfoDrawerComponent', () => {
  const deviceDetectorMock = {
    isDesktop: () => false
  };
  const component: BikeStationInfoDrawerComponent = new BikeStationInfoDrawerComponent(deviceDetectorMock as any);


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('isDesktopDevice should be true', () => {
    expect(component).toBeTruthy();
  });

  it('getDirectionsHref: should return url', () => {
    component.bikeStation = {
      img: null,
      id: '77',
      name: 'SON COSTA - SON FORTEZA',
      lng: 2.6661,
      lat: 39.584114,
      fullAddress: 'Argelaga, 26, 07005 Palma, Illes Balears',
      street: 'Argelaga',
      streetNumber: 26,
      cp: '07005',
      town: 'Palma',
      region: 'Illes Balears'
    };

    expect(component.getDirectionsHref()).toMatchSnapshot();
  });

  it('getDirectionsHref: should return falsy value', () => {
    component.bikeStation = undefined;

    expect(component.getDirectionsHref()).toBeFalsy();
  });
});
