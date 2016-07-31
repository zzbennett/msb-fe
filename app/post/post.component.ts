import {Component, Input} from '@angular/core';
import {Post} from "../models/post";
import {MarkDownRenderer} from "../services/markdown-renderer.service";

@Component({
  selector: 'msb-post-summary',
  templateUrl: 'app/post-summary/post-summary.component.html',
  styleUrls: ['app/post-summary/post-summary.component.css']
})

export class PostComponent {
  constructor(private _markDownRenderer: MarkDownRenderer) {}

  @Input() post: Post;
  public bodyHtml: string;

  ngOnInit() {
    this.bodyHtml = this._markDownRenderer.renderToHtml(this.post.body);
    console.log("summary html: "+this.bodyHtml);
  }
}
