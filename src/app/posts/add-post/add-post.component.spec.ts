import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddPostComponent } from './add-post.component';
import {  StoreModule, Store } from '@ngrx/store';

describe('AddPostComponent', () => {
  let component: AddPostComponent;
  let fixture: ComponentFixture<AddPostComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPostComponent ],
      imports: [StoreModule.forRoot({})]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
