import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrestsComponent } from './intrests.component';

describe('IntrestsComponent', () => {
  let component: IntrestsComponent;
  let fixture: ComponentFixture<IntrestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntrestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
