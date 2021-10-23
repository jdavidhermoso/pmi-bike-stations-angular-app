import * as fromDeviceLocation from './device-location.reducer';
import {deviceLocationSuccess} from '../../actions/device-location.actions';

describe('deviceLocationReducer', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {
      const deviceLocation = {
        lat: 3.87,
        lng: 2.56
      };
      const action = {
        type: 'Unexistant action',
      };
      const state = fromDeviceLocation.deviceLocationReducer({
        deviceLocation,
      }, action);

      expect(state).toMatchSnapshot();
    });
  });
  it('should set selectedBikeStation', () => {
    const deviceLocation = {
      lat: 3.87,
      lng: 2.56
    };
    const action = deviceLocationSuccess({
      deviceLocation,
    });
    const state = fromDeviceLocation.deviceLocationReducer(undefined, action);

    expect(state).toMatchSnapshot();
  });
});
