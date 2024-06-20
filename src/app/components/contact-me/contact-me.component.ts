import {Component, Input} from '@angular/core';
import {RouterModule} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";

@Component({
    standalone: true,
    selector: 'app-contact-me',
    templateUrl: './contact-me.component.html',
    imports: [RouterModule, NgOptimizedImage]
})
export class ContactMeComponent {
  @Input() postTitle: string = '';
  @Input() postDescription: string = '';
  @Input() coverImage: string = '';
  @Input() link: string = 'about';
}
