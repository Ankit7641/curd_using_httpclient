import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-mapobservable',
  templateUrl: './mapobservable.component.html',
  styleUrls: ['./mapobservable.component.scss']
})
export class MapobservableComponent implements OnInit {

  emp: any = [];
  sub1!: Subscription;

  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    // this.restApi.getEmployees().pipe(map((data: any) => data.id + data.name + data.email)).subscribe((data:any)=>{
    this.restApi.getEmployees().subscribe((data:any)=>{
      let d = data.map((data: any) => data.id + data.name + data.email) 
      this.emp = data;
     console.log(d); 
    })
  
    /* setTimeout(() => {
      this.sub1.unsubscribe();
    }, 500); */
  
  }

}
