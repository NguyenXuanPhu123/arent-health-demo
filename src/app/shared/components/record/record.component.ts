import { NgStyle } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'arent-record',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './record.component.html',
  styleUrl: './record.component.scss'
})
export class RecordComponent {
  urlImage = input.required<string>();
  title = input.required<string>();
  description = input.required<string>();
}
