import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndianHolidaysComponent } from './indian-holidays.component';

describe('IndianHolidaysComponent', () => {
  let component: IndianHolidaysComponent;
  let fixture: ComponentFixture<IndianHolidaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndianHolidaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndianHolidaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
