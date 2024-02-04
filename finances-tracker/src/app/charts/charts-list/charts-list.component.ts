import { Component } from '@angular/core';
import { SourceState } from '../../states/source-state';
import { SourceType } from '../../models/source-type.enum';

@Component({
  selector: 'app-charts-list',
  templateUrl: './charts-list.component.html',
  styleUrl: './charts-list.component.css'
})
export class ChartsListComponent 
{
  constructor(private sourceState: SourceState) {}
  
  public get sourceTypeRes(): typeof SourceType {
    return SourceType; 
  }

  getSourcesByType(sourceType: SourceType)
  {
    return this.sourceState.getSources.filter(source => source.sourceType === sourceType);
  }

  getAllSources()
  {
    return this.sourceState.getSources;
  }
}
