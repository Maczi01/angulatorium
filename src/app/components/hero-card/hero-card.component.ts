import {Component, Input} from '@angular/core';
import {RouterModule} from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  imports: [RouterModule]
})
export class HeroCardComponent {
  @Input() postTitle: string = '';
  @Input() postDescription: string = '';
  @Input() coverImage: string = '';
  @Input() link: string = '';

  constructor() {
  }
}
