import { Post } from './../models/posts.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http
      .get<Post[]>(`http://localhost:3000/products`)
    }

  addPost(post: Post): Observable<{ name: string }> {
    return this.http.post<{ name: string }>(
      `http://localhost:3000/products`,
      post
    );
  }

  updatePost(post: Post) {
    const postData = 
    { title: post.title, description: post.description }
 
    return this.http.patch(
      `http://localhost:3000/products/${post.id}`,
      postData
    );
  }

  deletePost(id: string) {
    return this.http.delete(
      `http://localhost:3000/products/${id}`
    );
  }

  getPostById(id: string): Observable<Post> {
    return this.http.get<Post>(
      `http://localhost:3000/products/${id}`
    );
  }
}
