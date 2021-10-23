import {DeviceLocationService} from './device-location.service';
import {of} from 'rxjs';

describe('DeviceLocationService', () => {
  it('should call getCurrentPosition', () => {
    const mockStore = {
      dispatch: jest.fn(),
      pipe: jest.fn(() => of([
        {
          img: '003.jpeg',
          id: '01',
          name: 'PLAÇA DELS PATINS',
          lng: 2.659399509,
          lat: 39.56590061
        }
      ]))
    };
    const service: DeviceLocationService = new DeviceLocationService(mockStore as any);
    // @ts-ignore
    navigator.geolocation = {
      getCurrentPosition: jest.fn().mockImplementation((success) =>
        Promise.resolve(
          success({
            coords: {
              latitude: 10,
              longitude: 10
            }
          })
        )
      )
    };

    service.requestDeviceLocation();

    expect(navigator.geolocation.getCurrentPosition).toHaveBeenCalled();
  });
  it('should return distance between coordinates', () => {
    const from = {
      lat: 2.83,
      lng: 3.99
    };
    const to = {
      lat: 2.30,
      lng: 3.39
    };

    expect(DeviceLocationService.distanceInKmBetweenEarthCoordinates(from, to)).toMatchSnapshot();
  });
  it('should return empty string', () => {
    const from = undefined;
    const to = undefined;

    // @ts-ignore
    expect(DeviceLocationService.distanceInKmBetweenEarthCoordinates(from, to)).toStrictEqual('');
  });
});
