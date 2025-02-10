import { Component, input } from '@angular/core';

@Component({
  selector: 'arent-diary',
  standalone: true,
  imports: [],
  templateUrl: './diary.component.html',
  styleUrl: './diary.component.scss',
})
export class DiaryComponent {
  date = input.required<string>();
  hour = input.required<string>();
  title = input.required<string>();
  desc = input.required<string>();
}
