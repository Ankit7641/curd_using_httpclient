import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomerFormPresenterService {
  customerData$: any;
  customerDetails(customerForm: FormGroup) {
    throw new Error('Method not implemented.');
  }
  bindForm(): import("@angular/forms").FormGroup {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
