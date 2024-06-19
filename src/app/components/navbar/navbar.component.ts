import {Component} from '@angular/core';
import {RouterModule} from "@angular/router";

@Component({
    standalone: true,
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    imports:[RouterModule]

})
export class NavbarComponent {
    links = [
        { path: '/', title: 'Home' },
        { path: '/about', title: 'About' },
        { path: '/contact', title: 'Contact' },
    ];

    constructor() {}
}
