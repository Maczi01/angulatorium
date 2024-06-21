import {Component} from "@angular/core";
import {HeroCardComponent} from "../../components/hero-card/hero-card.component";
import {AboutMeComponent} from "../../components/about-me/about-me.component";
import {ContactMeComponent} from "../../components/contact-me/contact-me.component";
import {IconWithTextComponent} from "../../components/icon/IconWithTextComponent";

// interface IconItem {
//   icon: any;
//   name: string;
// }

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'index.page.html',
  // template: `
  //   <ul>
  //     <h1>hi</h1>
  //     @for (item of iconList; track item.name) {
  //       <li>
  //         <app-icon-with-text [icon]="item.icon" [name]="item.name"></app-icon-with-text>
  //       </li>
  //     }
  //   </ul>
  // `,
  imports: [
    HeroCardComponent,
    AboutMeComponent,
    ContactMeComponent,
    IconWithTextComponent
  ]
})
export default class HomeComponent {
  // iconList = [
  //   { component: ReactIcon, name: "React" },
  //   { component: JavaIcon, name: "Java" },
  //   { component: JavaScriptIcon, name: "JavaScript" },
  //   { component: GitIcon, name: "Git" },
  //   { component: SolidityIcon, name: "Solidity" },
  //   { component: NextJsIcon, name: "NextJs" },
  //   { component: MaterialUIIcon, name: "MaterialUI" },
  //   { component: GraphQLIcon, name: "GraphQL" },
  //   { component: NodeJsIcon, name: "NodeJs" },
  //   { component: FigmaIcon, name: "Figma" },
  //   { component: PostmanIcon, name: "Postman" },
  //   { component: MySQLIcon, name: "MySQL" },
  // ];

}
