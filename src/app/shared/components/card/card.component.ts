import { Component, input } from '@angular/core';

@Component({
  selector: 'arent-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  url = input.required<string>();
  text = input.required<string>();
  desc = input<string>();
  hashtag = input<string[]>();

}
