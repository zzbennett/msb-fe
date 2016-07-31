import { Component } from '@angular/core';

import {PostsService} from "../services/posts.service";
import {Post} from "../models/post";
import {PostSummaryComponent} from "../post-summary/post-summary.component";

@Component({
  selector: 'post-listing',
  templateUrl: 'app/posts-listing/posts-listing.component.html',
  styleUrls: ['app/posts-listing/posts-listing.component.css'],
  directives: [PostSummaryComponent]
})
export class PostsListingComponent {
  public posts: Post[];
  public errorMessage: string;

  constructor(private postsService: PostsService) {
  }

  ngOnInit() {
    console.log("initializing posts listing component");
    this.getPosts();
  }

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
