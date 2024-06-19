import {Component, Input} from '@angular/core';
import {RouterModule} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";

@Component({
    standalone: true,
    selector: 'app-card',
    templateUrl: './card.component.html',
    imports: [RouterModule, NgOptimizedImage]
})
export class CardComponent {
  @Input() postTitle: string = '';
  @Input() postDescription: string = '';
  @Input() coverImage: string = '';
  @Input() link: string = '';
}
