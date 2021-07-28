import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MVPcustomerComponent } from './mvpcustomer.component';

describe('MVPcustomerComponent', () => {
  let component: MVPcustomerComponent;
  let fixture: ComponentFixture<MVPcustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MVPcustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MVPcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
