import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from "./components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: 'app.component.html',
  // styles: [
  //   `
  //     :host {
  //       max-width: 1280px;
  //       margin: 0 auto;
  //       padding: 2rem;
  //       text-align: center;
  //     }
  //
  //     nav {
  //       text-align: left;
  //       padding: 0 0 2rem 0;
  //     }
  //   `,
  // ],
})
export class AppComponent {}
