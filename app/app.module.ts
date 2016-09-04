import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {FormsModule} from "@angular/forms";
import { routing, appRoutingProviders } from './app.routing';
import {HTTP_PROVIDERS} from "@angular/http";
import {PostsService} from "./services/posts.service";
import {MarkDownRenderer} from "./services/markdown-renderer.service";
import {MdIconRegistry} from "@angular2-material/icon/icon-registry";

@NgModule({
  imports:      [ BrowserModule, FormsModule, routing ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [appRoutingProviders, HTTP_PROVIDERS, PostsService, MarkDownRenderer, MdIconRegistry]
})

export class AppModule { }
