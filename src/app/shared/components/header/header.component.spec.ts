import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import {  StoreModule, Store } from '@ngrx/store';
describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [StoreModule.forRoot({})]
    })
    .compileComponents();
    
   
  }));
  

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
