import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapobservableRoutingModule } from './mapobservable-routing.module';
import { MapobservableComponent } from './mapobservable.component';
import { RestApiService } from '../shared/rest-api.service';


@NgModule({
  declarations: [
    MapobservableComponent
  ],
  imports: [
    CommonModule,
    MapobservableRoutingModule
  ],
  providers:[
    RestApiService
  ]
})
export class MapobservableModule { }
