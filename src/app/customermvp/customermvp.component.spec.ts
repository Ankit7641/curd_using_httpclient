import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomermvpComponent } from './customermvp.component';

describe('CustomermvpComponent', () => {
  let component: CustomermvpComponent;
  let fixture: ComponentFixture<CustomermvpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomermvpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomermvpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
