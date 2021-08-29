import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditPostComponent } from './edit-post.component';

import {  StoreModule, Store } from '@ngrx/store';

describe('EditPostComponent', () => {
  let component: EditPostComponent;
  let fixture: ComponentFixture<EditPostComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPostComponent ],
      imports: [StoreModule.forRoot({})]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
