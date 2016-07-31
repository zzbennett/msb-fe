import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  selector: 'msb-content',
  templateUrl: 'app/content/content.component.html',
  styleUrls: ['app/content/content.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class ContentComponent {

  constructor() {
  }
}
