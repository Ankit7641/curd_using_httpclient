import { Component, OnInit,AfterViewInit,TemplateRef,ViewChild,ViewContainerRef,ElementRef, ChangeDetectionStrategy, NgZone } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import {ComponentPortal, DomPortal, Portal, TemplatePortal} from '@angular/cdk/portal';
import { take } from 'rxjs/operators';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';



@Component({
  selector: 'app-cdkexample',
  templateUrl: './cdkexample.component.html',
  styleUrls: ['./cdkexample.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CDKExampleComponent implements AfterViewInit  {
  // For Scrolling
  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
  /* ngAfterViewInit() {}
 */
  @ViewChild('autosize') autosize!: CdkTextareaAutosize;
  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  //////////////////////////////////// Text Field

  triggerResize(){
    this._ngZone.onStable.pipe(take(1)) .subscribe(()=> this.autosize.resizeToFitContent(true));
  }

  ////////////////////////////////////
  
  @ViewChild('templatePortalContent') templatePortalContent!: TemplateRef<unknown>;
  @ViewChild('domPortalContent') domPortalContent!: ElementRef<HTMLElement>;

  selectedPortal!: Portal<any>;
  componentPortal!: ComponentPortal<ComponentPortalExample>;
  templatePortal!: TemplatePortal<any>;
  domPortal!: DomPortal<any>;

  constructor(private _viewContainerRef: ViewContainerRef,private _ngZone: NgZone) { }

  ngAfterViewInit() {
    this.componentPortal = new ComponentPortal(ComponentPortalExample);
    this.templatePortal = new TemplatePortal(
      this.templatePortalContent,
      this._viewContainerRef
    );
    this.domPortal = new DomPortal(this.domPortalContent);
  }
}
@Component({
  selector: 'component-portal-example',
  template: 'Hello, this is a component portal'
})
export class ComponentPortalExample  { }