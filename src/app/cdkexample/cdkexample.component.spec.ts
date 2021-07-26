import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CDKExampleComponent } from './cdkexample.component';

describe('CDKExampleComponent', () => {
  let component: CDKExampleComponent;
  let fixture: ComponentFixture<CDKExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CDKExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CDKExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
