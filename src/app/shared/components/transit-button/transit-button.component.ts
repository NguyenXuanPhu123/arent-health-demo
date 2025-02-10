import { Component, input } from '@angular/core';

@Component({
  selector: 'arent-transit-button',
  standalone: true,
  imports: [],
  templateUrl: './transit-button.component.html',
  styleUrl: './transit-button.component.scss'
})
export class TransitButtonComponent {
  url = input.required<string>();
  text = input.required<string>()
}
