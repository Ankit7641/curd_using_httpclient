import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { SwitchmapComponent } from './switchmap/switchmap.component';
import { ConcatmapComponent } from './concatmap/concatmap.component';
import { CombinelatestComponent } from './combinelatest/combinelatest.component';
import { CustomermvpComponent } from './customermvp/customermvp.component';
import { CustomerComponent } from './customermvp/customer/customer.component';
import { CustomerlistComponent } from './customermvp/customerlist/customerlist.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeCreateComponent,
    EmployeeEditComponent,
    EmployeeListComponent,
    ReactiveFormComponent,
    SwitchmapComponent,
    ConcatmapComponent,
    CombinelatestComponent,
    CustomermvpComponent,
    CustomerComponent,
    CustomerlistComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
