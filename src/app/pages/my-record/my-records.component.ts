import { Component } from '@angular/core';
import { ButtonComponent, DiaryComponent, ExersiseOptionComponent, RecordComponent } from '@shared/components';
import { diariesMyRecord, exercisesMyRecord, lineChartData, recordsMyRecord } from '@shared/mock-data';
import { TDiary, TExercise, TRecord } from '@shared/types';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'arent-my-records',
  standalone: true,
  imports: [
    ButtonComponent,
    RecordComponent,
    BaseChartDirective,
    DiaryComponent,
    ExersiseOptionComponent
  ],
  templateUrl: './my-records.component.html',
  styleUrl: './my-records.component.scss',
})
export class MyRecordsComponent {
  records: TRecord[] = recordsMyRecord;

  diaries: TDiary[] = diariesMyRecord;

  exercises: TExercise[] = exercisesMyRecord;

  lineChartData = lineChartData;

  addDiary() {
    const randomIndex = Math.floor(Math.random() * this.diaries.length);
    const newDiary = this.diaries[randomIndex];
    this.diaries.push(newDiary);
  }
}
