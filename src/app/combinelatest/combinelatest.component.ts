import { Component, OnInit } from '@angular/core';
import { combineLatest, timer } from 'rxjs';

@Component({
  selector: 'app-combinelatest',
  templateUrl: './combinelatest.component.html',
  styleUrls: ['./combinelatest.component.scss']
})
export class CombinelatestComponent implements OnInit {

  normal: any[] = [];
  cLatest: any[] = [];

  constructor() {
    
//timerOne emits first value at 1s, then once every 4s
const timer1 = timer(1000, 4000);
//timerTwo emits first value at 2s, then once every 4s
const timer2 = timer(2000, 4000);
//timerThree emits first value at 3s, then once every 4s
const timer3 = timer(3000, 4000);

//when one timer emits, emit the latest values from each timer as an array
const combined = combineLatest(timer1, timer2, timer3);
const subscribe = combined.subscribe(
  ([timerValOne, timerValTwo, timerValThree]) => {
    
/*
  	Example:
    timerOne first tick: 'Timer One Latest: 1, Timer Two Latest:0, Timer Three Latest: 0
    timerTwo first tick: 'Timer One Latest: 1, Timer Two Latest:1, Timer Three Latest: 0
    timerThree first tick: 'Timer One Latest: 1, Timer Two Latest:1, Timer Three Latest: 1
  */
  this.cLatest = [ ...this.cLatest, '<b>Timer 1: </b>' + timerValOne + '<br>' + '<b>Timer 2: </b>' + timerValTwo + '<br>'+ '<b>Timer 3: </b>' + timerValThree + '<br><br>']; }
);

  timer1.subscribe((res) => {
    this.normal = [ ...this.normal, '<b>Timer 1: </b>' + res + '<br>'];
  })

  
  timer2.subscribe((res) => {
    this.normal = [ ...this.normal, '<b>Timer 2: </b>' + res + '<br>'];
  })

  
  timer3.subscribe((res) => {
    this.normal = [ ...this.normal, '<b>Timer 3: </b>' + res + '<br><br>'];
  })
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
} 