import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CombinelatestComponent } from './combinelatest/combinelatest.component';
import { ConcatmapComponent } from './concatmap/concatmap.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ForkjoinComponent } from './forkjoin/forkjoin.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { SwitchmapComponent } from './switchmap/switchmap.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-employee' },
  { path: 'create-employee', component: EmployeeCreateComponent },
  { path: 'employees-list', component: EmployeeListComponent },
  { path: 'employee-edit/:id', component: EmployeeEditComponent },
  { path: 'reactive-form', component: ReactiveFormComponent},
  { path:'behavior-subject',
    loadChildren: () => import('./behaviour-subject/behaviour-subject.module').then(m => m.BehaviourSubjectModule)
  },
  {
    path:'subject',
    loadChildren: () => import('./subject/subject.module').then(m => m.SubjectModule)
  },
  {
    path:'mapobservable',
    loadChildren: () => import('./mapobservable/mapobservable.module').then(m => m.MapobservableModule)
  },
  { path: 'switchMAp', component: SwitchmapComponent},
  { path: 'Concatmap', component: ConcatmapComponent},
  { path: 'combinelatest', component: CombinelatestComponent},
  { path: 'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) },
  { path: 'forkjoin', component: ForkjoinComponent},
  { path: 'ngtemplate', loadChildren: () => import('./ngtemplate/ngtemplate.module').then(m => m.NgtemplateModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }