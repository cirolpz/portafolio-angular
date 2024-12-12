import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class SkillsComponent {
  @Input() imgSrc: string = '';
  @Input() altText: string = '';
  @Input() skillName: string = '';
  @Input() sizeClass: string = 'h-24 w-24 md:h-32 md:w-32'; // Default size
}