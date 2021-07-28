import { Component, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable, of } from 'rxjs';
import { concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-concatmap',
  templateUrl: './concatmap.component.html',
  styleUrls: ['./concatmap.component.scss']
})
export class ConcatmapComponent implements OnInit {
  count!: number;
  ngOnInit(): void {  }

  @ViewChild('button',{static:true}) button:any;
  clicks$!: Observable<any>;
 
  ngAfterViewInit() {
    this.clicks$ = fromEvent(this.button.nativeElement, 'click');
    this.concatMapExample3();
  }
 
  delayedObs(count:number) {
    return new Observable((observer) => {
      setTimeout(() => { observer.next(count+" A") }, 100);
      setTimeout(() => { observer.next(count+" B") }, 200);
      setTimeout(() => { observer.next(count+" C") }, 300);
      setTimeout(() => { observer.next(count+" D") }, 400);
      setTimeout(() => { observer.next(count+" E"); observer.complete() }, 500);
    })
  }
 
  concatMapExample3() {
 
    let obs=
 
    this.clicks$
      .pipe(
        concatMap(() => {
          this.count=this.count+1;
          return this.delayedObs(this.count)
        })
      )
      .subscribe(val => console.log(val));
  }
 
}