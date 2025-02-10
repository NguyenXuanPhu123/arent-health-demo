import { Component } from '@angular/core';
import { ButtonComponent, CardComponent } from '@shared/components';
import { cardDatasLandingPage } from '@shared/mock-data';
import { TCard, TRecommended } from '@shared/types';

@Component({
  selector: 'arent-column',
  standalone: true,
  imports: [CardComponent, ButtonComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  recommendeds: TRecommended[] = [
    {
      type: 'columnn',
      description: 'オススメ',
    },
    {
      type: 'diet',
      description: 'ダイエット',
    },
    {
      type: 'beauty',
      description: '美容',
    },
    {
      type: 'health',
      description: '健康',
    },
  ];

  cards: TCard[] = cardDatasLandingPage;

  addItem() {
    const randomIndex = Math.floor(Math.random() * this.cards.length);
    const newItem = this.cards[randomIndex];
    this.cards.push(newItem);
  }
}
