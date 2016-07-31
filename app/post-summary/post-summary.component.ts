import {Component, Input} from '@angular/core';
import {Post} from "../models/post";
import {MarkDownUtil} from "../util/mark-down.util";

@Component({
  selector: 'msb-post-summary',
  templateUrl: 'app/post-summary/post-summary.component.html',
  styleUrls: ['app/post-summary/post-summary.component.css']
})

export class PostSummaryComponent {
  constructor() {}

  @Input() post: Post;
  public markDownUtil: MarkDownUtil;
  public summaryHtml: string;

  ngOnInit() {
    this.markDownUtil = new MarkDownUtil();
    this.summaryHtml = this.markDownUtil.renderToHtml(this.post.summary);
    console.log("summary html: "+this.summaryHtml);
  }
}
