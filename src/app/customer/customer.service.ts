import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Customer } from './customer.model';

@Injectable()
export class CustomerService {

  apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } 

  getCustomers():Observable<Customer>{
    console.log(Customer)
    return this.http.get<Customer>(this.apiURL + '/customer');
  }

  deleteCustomer(id: number){
    return this.http.delete<Customer>(this.apiURL + '/customer/' + id, this.httpOptions)

  }
}
