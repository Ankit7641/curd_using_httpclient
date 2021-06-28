import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class MapservService {

  public apiURL:string ='http://localhost:3000';

  constructor(private http:HttpClient) { }

  public loadPublicData():Observable<any>{
    return this.http.get(this.apiURL);
  } 

}
