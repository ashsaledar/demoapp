import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PostsListComponent } from './posts-list.component';
import {  StoreModule, Store } from '@ngrx/store';
describe('PostsListComponent', () => {
  let component: PostsListComponent;
  let fixture: ComponentFixture<PostsListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsListComponent ],
      imports: [StoreModule.forRoot({})]
    })
    .compileComponents();
    
      
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
