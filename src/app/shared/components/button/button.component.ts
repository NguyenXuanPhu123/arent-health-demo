import { Component, input } from '@angular/core';

@Component({
  selector: 'arent-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  text = input.required<string>();
  width = input<string>();
}
