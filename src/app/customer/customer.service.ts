import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Customer } from './customer.model';

@Injectable()
export class CustomerService {

  apiURL = 'http://localhost:3000';

  public customerList:Customer[]=[
    {
      id:1,
      name:'abc',
      salary:'10000'
    },
    {
      id:2,
      name:'abc',
      salary:'20000'
    },
    {
      id:3,
      name:'abc',
      salary:'9000'
    }
  ]


  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } 

  public getCustomers():Observable<Customer[]>{
    return of(this.customerList)
  }

  public deleteCustomer(value:number):Observable<any>{
    return of(true)
  }
}
