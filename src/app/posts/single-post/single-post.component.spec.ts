import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SinglePostComponent } from './single-post.component';
import {  StoreModule } from '@ngrx/store';
describe('SinglePostComponent', () => {
  let component: SinglePostComponent;
  let fixture: ComponentFixture<SinglePostComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePostComponent ],
      imports: [StoreModule.forRoot({})]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
