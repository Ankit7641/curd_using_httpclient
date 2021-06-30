import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerListPresetationComponent } from './customer-list-presetation.component';

describe('CustomerListPresetationComponent', () => {
  let component: CustomerListPresetationComponent;
  let fixture: ComponentFixture<CustomerListPresetationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerListPresetationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerListPresetationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
