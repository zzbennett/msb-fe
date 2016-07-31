import { Component } from '@angular/core';

import {PostsService} from "../services/posts.service";
import {Post} from "../models/post";
import {PostSummaryComponent} from "../post-summary/post-summary.component";

@Component({
  selector: 'msb-content',
  templateUrl: 'app/content/content.component.html',
  styleUrls: ['app/content/content.component.css'],
  directives: [PostSummaryComponent]
})
export class ContentComponent {
  public posts: Post[];
  public errorMessage: string;

  constructor(private postsService: PostsService) {
  }

  ngOnInit() { this.getPosts(); }

  getPosts() {
    this.postsService.getPosts().subscribe(
      records => {
        this.posts = records;
        console.log("got posts from posts service: "+this.posts);
      },
      error => {
        this.errorMessage = <any>error;
      }
    );
  }
}
