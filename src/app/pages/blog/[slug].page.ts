import { Component } from '@angular/core';
import { injectContent, MarkdownComponent } from '@analogjs/content';
import { AsyncPipe } from '@angular/common';
import PostAttributes from "../../app.config";

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [AsyncPipe, MarkdownComponent],
  templateUrl: '[slug].page.html',
})
export default class HomeComponent {
  readonly post$ = injectContent<PostAttributes>('slug');
}
