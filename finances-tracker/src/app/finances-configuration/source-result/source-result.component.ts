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

  getDistinctSourceTags()
  {
    return [... new Set(this.sources.map(source => source.tag))];
  }
}
