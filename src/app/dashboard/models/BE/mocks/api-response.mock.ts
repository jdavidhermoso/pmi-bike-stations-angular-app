import {ApiResponse} from '../api-response';

export const apiResponseDataMock: ApiResponse = {
  last_updated: 1633943559,
  ttl: 22,
  data: {
    stations: [
      {
        station_id: 20,
        name: 'C/ CARTAGENA, 308',
        physical_configuration: 'ELECTRICBIKESTATION',
        lat: 41.410314,
        lon: 2.1757334,
        altitude: 46.0,
        address: 'C/ CARTAGENA, 308',
        post_code: '08025',
        capacity: 18,
        nearby_distance: 1000.0
      },
      {
        station_id: 21,
        name: 'C/ SANT ANTONI MARIA CLARET, 214',
        physical_configuration: 'ELECTRICBIKESTATION',
        lat: 41.4108439,
        lon: 2.1740575,
        altitude: 52.0,
        address: 'C/ SANT ANTONI MARIA CLARET, 214',
        post_code: '08025',
        capacity: 21,
        nearby_distance: 1000.0
      },
      {
        station_id: 22,
        name: 'C/ SARDENYA, 292',
        physical_configuration: 'ELECTRICBIKESTATION',
        lat: 41.4016969,
        lon: 2.175767,
        altitude: 28.0,
        address: 'C/ SARDENYA, 292',
        post_code: '08013',
        capacity: 19,
        nearby_distance: 1000.0
      },
      {
        station_id: 23,
        name: 'C/ BRUC, 45',
        physical_configuration: 'ELECTRICBIKESTATION',
        lat: 41.3924661,
        lon: 2.1717397,
        altitude: 21.0,
        address: 'C/ BRUC, 45',
        post_code: '08010',
        capacity: 27,
        nearby_distance: 1000.0
      }
    ]
  }
};
