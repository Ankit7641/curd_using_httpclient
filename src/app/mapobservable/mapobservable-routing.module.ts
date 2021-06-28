import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapobservableComponent } from './mapobservable.component';

const routes: Routes = [
  {path: '', component: MapobservableComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapobservableRoutingModule { }
