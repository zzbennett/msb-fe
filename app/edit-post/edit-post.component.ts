import {Component, Input} from '@angular/core';
import {Post} from "../models/post";
import {MarkDownRenderer} from "../services/markdown-renderer.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PostsService} from "../services/posts.service";

@Component({
  selector: 'msb-edit-post',
  templateUrl: 'app/edit-post/edit-post.component.html',
  styleUrls: ['app/edit-post/edit-post.component.css']
})

export class EditPostComponent {
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _postsService: PostsService,
    private _markDownRenderer: MarkDownRenderer) {}

  public post: Post;
  public action: string;
  public bodyHtml: string;
  private sub: any;
  public errorMessage: string;

  ngOnInit() {

    this.sub = this._route.params.subscribe(params => {
      let id:string = params['id'];
      if(id === "new") {
        this.post = new Post();
        this.action = "Create";
      } else {
        this.action = "Edit";
        this._postsService.getPost(id).subscribe(
          p => {
            this.post = p;
            this.bodyHtml = this._markDownRenderer.renderToHtml(this.post.body);
          },
          error => {
            this.errorMessage = <any>error;
          }
        );
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
