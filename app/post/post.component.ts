import {Component, Input} from '@angular/core';
import {Post} from "../models/post";
import {MarkDownRenderer} from "../services/markdown-renderer.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PostsService} from "../services/posts.service";

@Component({
  selector: 'msb-post',
  templateUrl: 'app/post/post.component.html',
  styleUrls: ['app/post/post.component.css']
})

export class PostComponent {
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _postsService: PostsService,
    private _markDownRenderer: MarkDownRenderer) {}

  public post: Post;
  public bodyHtml: string;
  private sub: any;
  public errorMessage: string;

  ngOnInit() {

    this.sub = this._route.params.subscribe(params => {
      let id:string = params['id'];
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
