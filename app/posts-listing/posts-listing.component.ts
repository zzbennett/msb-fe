import { Component } from '@angular/core';

import {PostsService} from "../services/posts.service";
import {Post} from "../models/post";
import {PostSummaryComponent} from "../post-summary/post-summary.component";
import {ROUTER_DIRECTIVES, Router} from "@angular/router";

@Component({
  selector: 'post-listing',
  templateUrl: 'app/posts-listing/posts-listing.component.html',
  styleUrls: ['app/posts-listing/posts-listing.component.css'],
  directives: [PostSummaryComponent, ROUTER_DIRECTIVES]
})
export class PostsListingComponent {
  public posts: Post[];
  public errorMessage: string;

  constructor(private postsService: PostsService,
              private router: Router) {
  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postsService.getPosts().subscribe(
      records => {
        this.posts = records;
      },
      error => {
        this.errorMessage = <any>error;
      }
    );
  }

  onSelect(post: Post) {
    this.router.navigate(['/posts', post.id]);
  }
}
