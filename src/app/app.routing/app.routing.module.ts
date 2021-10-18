import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {BikeStationsMapComponent} from '../bike-stations-map';
import {BikeStationsListComponent} from '../bike-stations-gallery';


const routes: Route[] = [
  {
    path: 'list',
    component: BikeStationsListComponent
  },
  {
    path: 'map',
    component: BikeStationsMapComponent
  },
  {
    path: '**',
    redirectTo: 'list'
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {
}
