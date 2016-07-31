import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {Post} from "../models/post";
import {HttpUtil} from "../util/http.util";

@Injectable()
export class PostsService {
  constructor(private http: Http) {}

  private postsUrl = "http://luke:5000/v1/posts";

  getPosts(): Observable<Post[]> {
    console.log("Getting posts");
    return this.http.get(this.postsUrl).map(HttpUtil.extractData).map(PostsService.extractPosts).catch(HttpUtil.handleError)
  }

  static extractPosts(body: any) {
    return body.posts;
  }
}
