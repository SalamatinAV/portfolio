import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockJsComponent } from './clock-js.component';

describe('ClockJsComponent', () => {
  let component: ClockJsComponent;
  let fixture: ComponentFixture<ClockJsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClockJsComponent]
    });
    fixture = TestBed.createComponent(ClockJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
