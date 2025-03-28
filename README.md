# Portafolio Angular
### Descripción del Proyecto

Este proyecto es una aplicación de portafolio personal desarrollada en Angular. El objetivo principal es mostrar los proyectos y habilidades del desarrollador de una manera organizada y visualmente atractiva. La aplicación está dividida en varios componentes reutilizables, lo que facilita la gestión y actualización del contenido.
### VIDEO
<td style="width: 50%; border: 2px solid #FFA500; padding: 15px;">
      <a href="https://www.youtube.com/watch?v=yw3zVEmrAj0" target="_blank">
        <img src="https://img.youtube.com/vi/yw3zVEmrAj0/maxresdefault.jpg" alt="ScreenMatch-ManejoDeSeriesConAPIyBD" style="width: 100%; border-radius: 8px;">
      </a>
    </td>

    
### Componentes Principales

1.  **ProyectosComponent**: Este componente es responsable de mostrar una lista de proyectos. Cada proyecto se muestra utilizando el componente  `ProjectItemComponent`.
    
2.  **ProjectItemComponent**: Este componente es un subcomponente reutilizable que recibe datos de un proyecto a través de propiedades de entrada (`@Input`). Muestra la imagen, el título, la descripción y un enlace al repositorio de GitHub del proyecto.
    
3.  **Interfaces**: Se utiliza una interfaz  `Project`  para definir la estructura de los datos del proyecto. Esto asegura que los datos pasados a  `ProjectItemComponent`  sean consistentes y fáciles de manejar.
    


### Beneficios

-   **Reutilización**: Los componentes reutilizables permiten añadir nuevos proyectos fácilmente sin duplicar código.
-   **Mantenibilidad**: La separación de responsabilidades facilita la actualización y el mantenimiento del código.
-   **Consistencia**: El uso de interfaces asegura que los datos sean consistentes en toda la aplicación.

Este enfoque modular y reutilizable mejora la eficiencia del desarrollo y la calidad del código.
