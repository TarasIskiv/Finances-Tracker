import { Component } from '@angular/core';
import { SourceState } from './states/source-state';
import { SourceType } from './models/source-type.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Finances Tracker';
  income: number;
  outcome: number;
  constructor(private sourceState: SourceState) 
  {
   this.income = sourceState.getSources.filter(x => x.sourceType === SourceType.Income).reduce((sum, cur) => sum += cur.amount, 0);
   this.outcome = sourceState.getSources.filter(x => x.sourceType === SourceType.Outcome).reduce((sum, cur) => sum += cur.amount, 0);
  }
}
