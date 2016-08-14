import { Component } from '@angular/core';
import { MdToolbar } from '@angular2-material/toolbar';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MdIcon,MdIconRegistry } from '@angular2-material/icon';
import {ContentComponent} from "./content/content.component";
import {appRouterProviders} from "./app.routes";
import {MarkDownRenderer} from "./services/markdown-renderer.service";
import {PostsService} from "./services/posts.service";
import {HTTP_PROVIDERS} from "@angular/http";

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [MdToolbar, MD_BUTTON_DIRECTIVES, MdIcon, ContentComponent],
  providers: [HTTP_PROVIDERS, PostsService, MarkDownRenderer, appRouterProviders, MdIconRegistry]
})
export class AppComponent { }
