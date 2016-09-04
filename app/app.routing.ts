import {PostsListingComponent} from "./posts-listing/posts-listing.component";
import {PostComponent} from "./post/post.component";
import {EditPostComponent} from "./edit-post/edit-post.component";

import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from "./page-not-found.component";

const appRoutes: Routes = [
  { path: 'posts', component: PostsListingComponent },
  { path: 'posts/:id', component: PostComponent },
  { path: 'posts/edit/:id', component: EditPostComponent },
  {
    path: '',
    redirectTo: '/posts',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
  // { path: '', component: PostsListingComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
