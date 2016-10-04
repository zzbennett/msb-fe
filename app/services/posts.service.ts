import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';

import { Post } from '../models/post';
import { HttpUtil } from '../util/http.util';

@Injectable()
export class PostsService {
  private postsUrl = 'http://luke:5000/v1/posts';

  constructor(private http: Http) { }

  getPost(id: string): Observable<Post> {
    return this.http
    .get(`${this.postsUrl}/${id}`)
    .map(HttpUtil.extractData)
    .catch<Post>(HttpUtil.handleError);
  }

  getPosts(): Observable<Post[]> {
    return this.http
    .get(this.postsUrl)
    .map(HttpUtil.extractData)
    .map(PostsService.extractPosts)
    .catch<Post[]>(HttpUtil.handleError);
  }

  save(post: Post) {
    return this.http.post(this.postsUrl, JSON.stringify(post), HttpUtil.jsonOptions())
      .map(HttpUtil.extractData)
      .map(PostsService.extractPosts)
      .catch(HttpUtil.handleError);
  }

  // NOTE: the body of my mocked rest endpoint directly contains the posts,
  // so I had to make this compatible since I didn't wanted to invest much time
  // on the server side
  static extractPosts(body: any): Post[] | Post {
    return body.posts ? body.posts : body;
  }
}
