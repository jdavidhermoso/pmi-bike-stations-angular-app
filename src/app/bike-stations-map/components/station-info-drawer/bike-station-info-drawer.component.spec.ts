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

  describe('onBikeDirectionsClick', () => {
    let windowSpy: any;

    afterEach(() => {
      windowSpy.mockRestore();
    });

    it('onBikeDirectionsClick: should call window.open', () => {
      const windowOpenMock = jest.fn();
      windowSpy = jest.spyOn(window, 'window', 'get');
      windowSpy.mockImplementation((): any => {
        return {
          open: windowOpenMock
        };
      });
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
      component.onBikeDirectionsClick();

      expect(windowOpenMock.mock.calls).toMatchSnapshot();
    });
    it('onWalkDirectionsClick: should call window.open', () => {
      const windowOpenMock = jest.fn();
      windowSpy = jest.spyOn(window, 'window', 'get');
      windowSpy.mockImplementation((): any => {
        return {
          open: windowOpenMock
        };
      });
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
      component.onWalkDirectionsClick();

      expect(windowOpenMock.mock.calls).toMatchSnapshot();
    });
    it('onBikeDirectionsClick: should not call window.open', () => {
      const windowOpenMock = jest.fn();
      windowSpy = jest.spyOn(window, 'window', 'get');
      windowSpy.mockImplementation((): any => {
        return {
          open: windowOpenMock
        };
      });
      component.bikeStation = undefined;
      component.onBikeDirectionsClick();

      expect(windowOpenMock).not.toHaveBeenCalled();
    });

    it('onWalkDirectionsClick: should not call window.open', () => {
      const windowOpenMock = jest.fn();
      windowSpy = jest.spyOn(window, 'window', 'get');
      windowSpy.mockImplementation((): any => {
        return {
          open: windowOpenMock
        };
      });
      component.bikeStation = undefined;
      component.onWalkDirectionsClick();

      expect(windowOpenMock).not.toHaveBeenCalled();
    });
  });
});
