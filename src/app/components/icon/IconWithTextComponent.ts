// icon-with-text.component.ts
import { Component, Input } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-icon-with-text',
  standalone: true,
  imports: [NgComponentOutlet],
  template: `
    <div class="icon-with-text">
      <ng-container *ngComponentOutlet="icon"></ng-container>
      <span class="text-black">{{ name }}</span>
    </div>
  `,
  styles: [`
    .icon-with-text {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  `]
})
export class IconWithTextComponent {
  @Input() icon!: any;
  @Input() name!: string;
}
