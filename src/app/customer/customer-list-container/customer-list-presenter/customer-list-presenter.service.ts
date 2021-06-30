import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class CustomerListPresenterService {

  public customerId:Subject<any> = new Subject();
  public customerId$!: Observable<any>;

  constructor() { 
    this.customerId$ = this.customerId.asObservable();
  }

  
  public bindForm() {
    return new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
    })
  }

  public deleteCustomer(value: number) {
    debugger
    console.log('delete', value);
    this.customerId.next(value);
  }
}