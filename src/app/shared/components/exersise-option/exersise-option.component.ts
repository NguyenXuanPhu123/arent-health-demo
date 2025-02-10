import { Component, input } from '@angular/core';

@Component({
  selector: 'arent-exersise-option',
  standalone: true,
  imports: [],
  templateUrl: './exersise-option.component.html',
  styleUrl: './exersise-option.component.scss'
})
export class ExersiseOptionComponent {
  title = input.required<string>();
  kcal = input.required<string>();
  time = input.required<string>();
}
