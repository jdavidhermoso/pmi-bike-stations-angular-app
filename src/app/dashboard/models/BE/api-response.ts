import {BikeStation} from '../UI';

export interface ApiResponse {
  last_updated: number;
  ttl: number;
  data: { stations: BikeStation[] };

}



