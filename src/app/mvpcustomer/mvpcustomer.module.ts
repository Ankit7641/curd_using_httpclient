import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MVPcustomerRoutingModule } from './mvpcustomer-routing.module';
import { CustomerComponent } from './customer/customer.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';


@NgModule({
  declarations: [
    CustomerComponent,
    CustomerlistComponent
  ],
  imports: [
    CommonModule,
    MVPcustomerRoutingModule
  ]
})
export class MVPcustomerModule { }
