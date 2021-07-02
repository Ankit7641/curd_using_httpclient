import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { forkJoin, fromEvent, zip } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-forkjoin',
  templateUrl: './forkjoin.component.html',
  styleUrls: ['./forkjoin.component.scss']
})
export class ForkjoinComponent implements AfterViewInit {


  public Names = ["Apple", "Mango", "Banana", "Chiku", "Cherry", "Stawbery", "Kiwi", "DragonFruit", "Lichi", "Watermelon"]

  public Colors = ["red", "green", "blue", "purple", "violet"]


  @ViewChild('name', { static: false }) public name!: ElementRef;
  @ViewChild('color', { static: false }) public color!: ElementRef;

  ngAfterViewInit(): void {
    
    const nameobs = fromEvent<any>(this.name.nativeElement, "change").pipe(
      map(event => event.target.value),take(2))

    const colorobs = fromEvent<any>(this.color.nativeElement, "change").pipe(
      map(event => event.target.value),take(2))
    

      zip(nameobs, colorobs).subscribe(([name, color]) => {
        console.log('zip',name, color);
        this.box(name, color, "elcontanier2")
      })

    forkJoin([nameobs, colorobs]).subscribe(([name, color]) => {
      console.log('forkjoin',name, color);
      this. box(name, color, "elcontanier")
    })
   
  }
  box(name: any, color: any, containerId: any) {

    let el = document.createElement('div')
    el.innerText = name;
    el.setAttribute("class", color);
    document.getElementById(containerId)?.appendChild(el);
  }

}