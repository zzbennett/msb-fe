import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {Post} from "../models/post";
import {HttpUtil} from "../util/http.util";

@Injectable()
export class PostsService {
  constructor(private http: Http) {}

  private postsUrl = "http://luke:5000/v1/posts";

  getPost(id: string): Observable<Post> {
    return this.http.get(this.postsUrl+"/"+id).map(HttpUtil.extractData).catch(HttpUtil.handleError)
  }

  getPosts(): Observable<Post[]> {
    return this.http.get(this.postsUrl).map(HttpUtil.extractData).map(PostsService.extractPosts).catch(HttpUtil.handleError)
  }

  save(post: Post) {
    return this.http.post(this.postsUrl, JSON.stringify(post), HttpUtil.jsonOptions())
      .map(HttpUtil.extractData)
      .map(PostsService.extractPosts)
      .catch(HttpUtil.handleError);
  }

  static extractPosts(body: any) {
    return body.posts;
  }
}
