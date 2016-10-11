import { Component, Input, OnInit } from '@angular/core';

import { MarkDownRenderer } from '../services/markdown-renderer.service';

import { Post } from '../models/post';

@Component({
  selector: 'msb-post-summary',
  templateUrl: 'app/post-summary/post-summary.component.html',
  styleUrls: ['app/post-summary/post-summary.component.css']
})

export class PostSummaryComponent implements OnInit {
  constructor(private _markDownRenderer: MarkDownRenderer) { }

  @Input() post: Post;
  public summaryHtml: string;

  ngOnInit() {
    this.summaryHtml = this._markDownRenderer.renderToHtml(this.post.summary);
  }
}
