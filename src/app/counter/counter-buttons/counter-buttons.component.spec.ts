import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CounterButtonsComponent } from './counter-buttons.component';

describe('CounterButtonsComponent', () => {
  let component: CounterButtonsComponent;
  let fixture: ComponentFixture<CounterButtonsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
