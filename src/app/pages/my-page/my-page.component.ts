import { Component } from '@angular/core';
import { ButtonComponent, CardComponent, TransitButtonComponent } from '@shared/components';
import { cardsMyPage, lineChartData, transitButtonsMyPage } from '@shared/mock-data';
import { TCard, TMeal, TTransitButton } from '@shared/types';
import { BaseChartDirective } from 'ng2-charts';



@Component({
  selector: 'arent-home',
  standalone: true,
  imports: [
    TransitButtonComponent,
    CardComponent,
    ButtonComponent,
    BaseChartDirective,
  ],
  templateUrl: './my-page.component.html',
  styleUrl: './my-page.component.scss',
})
export class MyPageComponent {
  transitButtons: TTransitButton[] = transitButtonsMyPage;

  cards: TCard[] = cardsMyPage

  lineChartData = lineChartData;

  initCardsData = [...this.cards];
  filter(type: TMeal | undefined) {
    if (type) {
      this.cards = [...this.initCardsData];
      this.cards = this.cards.filter((d) => d.type === type);
    }
  }

  addItem() {
    const randomIndex = Math.floor(Math.random() * this.initCardsData.length);
    const newItem = this.initCardsData[randomIndex];
    this.cards.push(newItem);
    this.initCardsData.push(newItem);
  }
}
