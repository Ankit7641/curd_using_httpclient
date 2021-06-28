import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapobservableComponent } from './mapobservable.component';

describe('MapobservableComponent', () => {
  let component: MapobservableComponent;
  let fixture: ComponentFixture<MapobservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapobservableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapobservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
