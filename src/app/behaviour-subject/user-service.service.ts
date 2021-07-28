import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(){}
   private user = new BehaviorSubject<string>('Offical');
   public castUser = this.user.asObservable();
   
   editUser(newUser: string){
     this.user.next(newUser); 
   }
}
