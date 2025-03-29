import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { BiografiaComponent } from './components/biografia/biografia.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationComponent } from './components/education/education.component';
import { WorksComponent } from './components/works/works.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,  // Este componente es ahora standalone
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
