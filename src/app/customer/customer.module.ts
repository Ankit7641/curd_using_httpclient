import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { CustomerFormContainerComponent } from './customer-form-container/customer-form-container.component';
import { CustomerFormPresentationComponent } from './customer-form-container/customer-form-presentation/customer-form-presentation.component';
import { CustomerListContainerComponent } from './customer-list-container/customer-list-container.component';
import { CustomerListPresetationComponent } from './customer-list-container/customer-list-presetation/customer-list-presetation.component';
import { CustomerService } from './customer.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CustomerComponent,
    CustomerFormContainerComponent,
    CustomerFormPresentationComponent,
    CustomerListContainerComponent,
    CustomerListPresetationComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers:[
    CustomerService
  ]
})
export class CustomerModule { }
