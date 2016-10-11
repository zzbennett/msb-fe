import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Post } from '../models/post';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'post-listing',
  templateUrl: 'app/posts-listing/posts-listing.component.html',
  styleUrls: ['app/posts-listing/posts-listing.component.css']
})
export class PostsListingComponent implements OnInit {
  public posts: Post[];
  public errorMessage: string;

  constructor(private postsService: PostsService,
    private router: Router) {
  }

  ngOnInit() {
    console.log("calling onInit");
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
