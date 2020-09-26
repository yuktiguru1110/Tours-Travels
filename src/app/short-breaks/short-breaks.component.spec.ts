import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortBreaksComponent } from './short-breaks.component';

describe('ShortBreaksComponent', () => {
  let component: ShortBreaksComponent;
  let fixture: ComponentFixture<ShortBreaksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortBreaksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortBreaksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
