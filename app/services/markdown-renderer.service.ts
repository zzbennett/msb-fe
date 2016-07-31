import * as showdown from 'showdown';

export class MarkDownRenderer {
  public converter: any;

  constructor() {
    this.converter = new showdown.Converter();
  }

  renderToHtml(markdown: string) {
    return this.converter.makeHtml(markdown);
  }
}
