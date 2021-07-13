import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgtemplateRoutingModule } from './ngtemplate-routing.module';
import { NgtemplateComponent } from './ngtemplate.component';
import { DetaillistComponent } from './detaillist/detaillist.component';
import { HelloComponent } from './hello/hello.component';


@NgModule({
  declarations: [
    NgtemplateComponent,
    DetaillistComponent,
    HelloComponent
  ],
  imports: [
    CommonModule,
    NgtemplateRoutingModule
  ]
})
export class NgtemplateModule { }
