import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MarkDownRenderer } from '../services/markdown-renderer.service';

import { Post } from '../models/post';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'msb-post',
  templateUrl: 'app/post/post.component.html',
  styleUrls: ['app/post/post.component.css']
})

export class PostComponent implements OnInit, OnDestroy {
  public post: Post;
  public bodyHtml: string;
  private sub: any;
  public errorMessage: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _postsService: PostsService,
    private _markDownRenderer: MarkDownRenderer) { }

  ngOnInit() {
    this.sub = this._route.params.subscribe(params => {
      let id: string = params['id'];
      this._postsService.getPost(id).subscribe(
        p => {
          this.post = p;
          this.bodyHtml = this._markDownRenderer.renderToHtml(this.post.body);
        },
        error => {
          this.errorMessage = <any>error;
        }
      );
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
