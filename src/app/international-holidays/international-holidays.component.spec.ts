import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalHolidaysComponent } from './international-holidays.component';

describe('InternationalHolidaysComponent', () => {
  let component: InternationalHolidaysComponent;
  let fixture: ComponentFixture<InternationalHolidaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternationalHolidaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternationalHolidaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
