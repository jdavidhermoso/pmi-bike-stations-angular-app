import {BikeStationsMapComponent} from './bike-stations-map.component';

describe('BikeStationsMapComponent', () => {
  it('centerCoords', () => {
    const component: BikeStationsMapComponent = new BikeStationsMapComponent();

    expect(component.centerCoords).toMatchSnapshot();
  });
});
