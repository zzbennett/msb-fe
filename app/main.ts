import {bootstrap}    from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from "@angular/http";

import {AppComponent} from './app.component';
import {PostsService} from "./services/posts.service";
import {MarkDownRenderer} from "./services/markdown-renderer.service";
import {appRouterProviders} from "./app.routes";

bootstrap(AppComponent, [HTTP_PROVIDERS, PostsService, MarkDownRenderer, appRouterProviders]);
