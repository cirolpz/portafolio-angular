# Portafolio Angular
### Descripción del Proyecto

Este proyecto es una aplicación de portafolio personal desarrollada en Angular. El objetivo principal es mostrar los proyectos y habilidades del desarrollador de una manera organizada y visualmente atractiva. La aplicación está dividida en varios componentes reutilizables, lo que facilita la gestión y actualización del contenido.

### Componentes Principales

1.  **ProyectosComponent**: Este componente es responsable de mostrar una lista de proyectos. Cada proyecto se muestra utilizando el componente  `ProjectItemComponent`.
    
2.  **ProjectItemComponent**: Este componente es un subcomponente reutilizable que recibe datos de un proyecto a través de propiedades de entrada (`@Input`). Muestra la imagen, el título, la descripción y un enlace al repositorio de GitHub del proyecto.
    
3.  **Interfaces**: Se utiliza una interfaz  `Project`  para definir la estructura de los datos del proyecto. Esto asegura que los datos pasados a  `ProjectItemComponent`  sean consistentes y fáciles de manejar.
    

### Estructura del Código

#### proyectos.component.ts

import  {  Component  }  from  '@angular/core';

import  {  Project  }  from  '../interfaces/project.interface';

import  {  ProjectItemComponent  }  from  '../project-item/project-item.component';

@Component({

selector:  'app-proyectos',

templateUrl:  './proyectos.component.html',

standalone:  true,

imports:  [ProjectItemComponent]

})

export  class  ProyectosComponent  {

projects:  Project[]  =  [

{

id:  '1',

title:  'ScreenMatch',

description:  'ScreenMatch es una aplicación basada en Java que permite buscar series y episodios de un api, obtener información y gestionarla. La aplicación utiliza Spring Boot y Maven, ademas de una base de datos para almacenar la información y consultar.',

imageUrl:  '../../assets/img/ScreenMatch.png',

imageAlt:  'ScreenMatch',

githubUrl:  'https://github.com/cirolpz/ScreenMatch-ManejoDeSeriesConAPIyBD',

imageFirst:  true

},

{

id:  '2',

title:  'Video juego | programa integral',

description:  'Este juego fue desarrollado en Java. Fue creado para un programa para ayudar a niños con capacidades diferentes. El juego intenta enfrentar el defisis de atencion mejorando la concentracion de una manera didactica.',

imageUrl:  '../../assets/img/artromegaship.png',

imageAlt:  'Video Juego Programa Integral',

githubUrl:  'https://github.com/cirolpz/Juego-Java-POO-AstroMegaShip',

imageFirst:  false

},

{

id:  '3',

title:  'Pagina web Tecnica N°2',

description:  'Lideré el desarrollo de la pagina web de mi escuela para poder graduarme como técnico informático. Aprendí técnicas para poder llevar a cabo todo el desarrollo de una pagina web trabajando en equipo de manera optima.',

imageUrl:  '../../assets/img/escuela.png',

imageAlt:  'Pagina de la Escuela',

githubUrl:  'https://github.com/cirolpz/PaginaWEB-Tecnica2DrReneFavaloro',

imageFirst:  true

}

];

}

#### `project-item.component.ts`

import  {  Component,  Input  }  from  '@angular/core';

import  {  Project  }  from  '../interfaces/project.interface';

@Component({

selector:  'app-project-item',

templateUrl:  './project-item.component.html',

styleUrls:  ['./project-item.component.css'],

standalone:  true

})

export  class  ProjectItemComponent  {

@Input()  project!:  Project;

}

#### `project-item.component.html`

<div  class="color2 py-6 sm:py-8 lg:py-12">

<div  class="mx-auto max-w-screen-2xl px-4 md:px-8">

<div  class="flex flex-col overflow-hidden rounded-lg color3 sm:flex-row md:h-80">

<!-- Image Section -->

<div [ngClass]="{'order-first': project.imageFirst}"

class="h-48 w-full bg-gray-300 sm:h-auto sm:w-1/2 lg:w-2/5">

<img [src]="project.imageUrl"

loading="lazy"

[alt]="project.imageAlt"

class="h-full w-full object-cover object-center" />

</div>

<!-- Content Section -->

<div  class="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-9/12">

<h2  class="mb-4 text-xl font-bold text-gray-800 md:text-2xl lg:text-4xl">

{{project.title}}

</h2>

<p  class="mb-8 max-w-md text-gray-600">

{{project.description}}

</p>

<div  class="mt-auto">

<a [href]="project.githubUrl"

class="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base">

Ver Proyecto

</a>

</div>

</div>

</div>

</div>

</div>

### Beneficios

-   **Reutilización**: Los componentes reutilizables permiten añadir nuevos proyectos fácilmente sin duplicar código.
-   **Mantenibilidad**: La separación de responsabilidades facilita la actualización y el mantenimiento del código.
-   **Consistencia**: El uso de interfaces asegura que los datos sean consistentes en toda la aplicación.

Este enfoque modular y reutilizable mejora la eficiencia del desarrollo y la calidad del código.
