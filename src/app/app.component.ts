import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BiografiaComponent } from './biografia/biografia.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { WorksComponent } from './works/works.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from "./contact/contact.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    MenuComponent,
    BiografiaComponent,
    ProyectosComponent,
    SkillsComponent,
    EducationComponent,
    WorksComponent,
    FooterComponent,
    ContactComponent
]
})
export class AppComponent {
  title = 'cirodev';
}
