import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BiografiaComponent } from './biografia/biografia.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { WorksComponent } from './works/works.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([]),
    importProvidersFrom(BrowserModule),
    MenuComponent,
    HeaderComponent,
    BiografiaComponent,
    ProyectosComponent,
    SkillsComponent,
    EducationComponent,
    WorksComponent,
    FooterComponent
  ]
};