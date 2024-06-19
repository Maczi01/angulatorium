import { Component } from '@angular/core';
import { injectContentFiles } from '@analogjs/content';
import { RouterLink } from '@angular/router';
import PostAttributes from "../../app.config";
import {CardComponent} from "../../components/card/card.component";

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink, CardComponent],
  templateUrl: 'index.page.html',
  // template: `
  //   <h1>Blog Archive</h1>
  //   @for (post of posts;track post.attributes.slug) {
  //   <a [routerLink]="['/blog/', post.attributes.slug]">
  //     <h2 class="post__title">{{ post.attributes.title }}</h2>
  //     <p class="post__desc">{{ post.attributes.description }}</p>
  //   </a>
  //   }
  // `,
  styles: [
    `
      a {
        text-align: left;
        display: block;
        margin-bottom: 2rem;
      }

      .post__title,
      .post__desc {
        margin: 0;
      }
    `,
  ],
})
export default class HomeComponent {
  readonly posts = injectContentFiles<PostAttributes>();


}
