import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgtemplateComponent } from './ngtemplate.component';

const routes: Routes = [{ path: '', component: NgtemplateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgtemplateRoutingModule { }
