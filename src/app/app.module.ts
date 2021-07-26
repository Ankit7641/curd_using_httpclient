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
import { MVPcustomerComponent } from './mvpcustomer/mvpcustomer.component';
import { FilterPipe } from './filter.pipe';
import { ForkjoinComponent } from './forkjoin/forkjoin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CDKExampleComponent, ComponentPortalExample } from './cdkexample/cdkexample.component';
import { CdkDropList, DragDropModule } from '@angular/cdk/drag-drop';
import { CdkPortalOutlet, PortalModule } from '@angular/cdk/portal';
import { CdkScrollableModule, CdkVirtualScrollViewport, ScrollingModule } from '@angular/cdk/scrolling';


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
    MVPcustomerComponent,
    FilterPipe,
    ForkjoinComponent,
    CDKExampleComponent,
    ComponentPortalExample


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DragDropModule,
    PortalModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
