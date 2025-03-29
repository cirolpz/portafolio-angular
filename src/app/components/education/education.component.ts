import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-education-item',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  standalone: true
})
export class EducationComponent {
  @Input() href: string = '';
  @Input() imgSrc: string = '';
  @Input() altText: string = '';
  @Input() description: string = '';
}