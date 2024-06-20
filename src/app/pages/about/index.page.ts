import {Component} from "@angular/core";
import {injectContentFiles} from "@analogjs/content";
import PostAttributes from "../app.config";
import {HeroCardComponent} from "../components/hero-card/hero-card.component";
import {AboutMeComponent} from "../components/about-me/about-me.component";
import {ContactMeComponent} from "../components/contact-me/contact-me.component";

// export const routeMeta: RouteMeta = {
//   redirectTo: '/blog',
//   pathMatch: 'full',
// };

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'index.page.html',
  imports: [
    HeroCardComponent,
    AboutMeComponent,
    ContactMeComponent
  ]
})
export default class HomeComponent {
  readonly latestPost = injectContentFiles<PostAttributes>()[0];


}
