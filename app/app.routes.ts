import { provideRouter, RouterConfig } from '@angular/router';
import {AppComponent} from "./app.component";
import {PostsListingComponent} from "./posts-listing/posts-listing.component";

const routes: RouterConfig = [
  //{ path: 'crisis-center', component: CrisisCenterComponent },
  //{ path: 'heroes', component: HeroListComponent },
  //{ path: 'hero/:id', component: HeroDetailComponent },
  { path: '', component: PostsListingComponent },
  { path: 'posts', component: PostsListingComponent }
  //{ path: '**', component: PageNotFoundComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];
