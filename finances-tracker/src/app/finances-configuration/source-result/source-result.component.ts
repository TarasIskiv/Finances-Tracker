import { Component, Input } from '@angular/core';
import { SourceDetails } from '../../models/source-details';
import { SourceType } from '../../models/source-type.enum';

@Component({
  selector: 'app-source-result',
  templateUrl: './source-result.component.html',
  styleUrl: './source-result.component.css'
})
export class SourceResultComponent 
{
  @Input() sourceType: SourceType = SourceType.Income;
  @Input() sources: Array<SourceDetails> = [];

  get getDistinctSourceTags()
  {
    return [... new Set(this.sources.map(source => source.tag))];
  }

  get getSourceAmountsSum()
  {
    return this.sources.map(source => source.amount).reduce((sum, curr) => sum += curr);
  }

  isIncome(): boolean
  {
    return this.sourceType === SourceType.Income;
  }
}
