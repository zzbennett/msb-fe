import * as showdown from 'showdown';

export class MarkDownUtil {
  public converter: any;

  constructor() {
    this.converter = new showdown.Converter();
  }

  renderToHtml(markdown: string) {
    return this.converter.makeHtml(markdown);
  }
}
