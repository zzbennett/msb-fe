import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
import { HttpModule }    from '@angular/http';
import { PostsService } from './services/posts.service';
import { MarkDownRenderer } from './services/markdown-renderer.service';

import { MdButtonModule } from '@angular2-material/button';
import { ContentComponent } from './content/content.component';
import { MdToolbarModule } from '@angular2-material/toolbar';

import { MdIconRegistry, MdIconModule } from '@angular2-material/icon';
import { PostSummaryComponent } from './post-summary/post-summary.component';
import { PostsListingComponent } from './posts-listing/posts-listing.component';
import { PostComponent} from './post/post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    MdButtonModule,
    HttpModule,
    MdToolbarModule,
    MdIconModule
  ],
  declarations: [
    AppComponent,
    ContentComponent,
    EditPostComponent,
    PageNotFoundComponent,
    PostComponent,
    PostsListingComponent,
    PostSummaryComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    appRoutingProviders,
    PostsService,
    MarkDownRenderer,
    MdIconRegistry
  ]
})

export class AppModule { }
