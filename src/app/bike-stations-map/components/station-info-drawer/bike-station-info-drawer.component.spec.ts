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
      img: '003.jpeg',
      type: 'anchor',
      id: '01',
      name: 'PLAÇA DELS PATINS',
      lng: 2.659399509,
      lat: 39.56590061,
      kmToCityCenter: 90
    };

    expect(component.getDirectionsHref()).toMatchSnapshot();
  });

  it('getDirectionsHref: should return falsy value', () => {
    component.bikeStation = undefined;

    expect(component.getDirectionsHref()).toBeFalsy();
  });
});
