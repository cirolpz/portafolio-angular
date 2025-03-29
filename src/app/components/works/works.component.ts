import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-work-item',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class WorksComponent {
  @Input() href: string = '';
  @Input() imgSrc: string = '';
  @Input() altText: string = '';
  @Input() description: string = '';
}