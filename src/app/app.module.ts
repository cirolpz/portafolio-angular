import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent, // Importa el componente standalone aquí
    // Importa aquí cualquier otro módulo necesario
  ],
  bootstrap: []  // AppComponent se maneja como standalone, no es necesario en bootstrap
})
export class AppModule { }
