import { Component, OnInit } from '@angular/core';
import { SourceState } from '../../states/source-state';
import { SourceDetails } from '../../models/source-details';
import { SourceType } from '../../models/source-type.enum';

@Component({
  selector: 'app-finances-settings',
  templateUrl: './finances-settings.component.html',
  styleUrl: './finances-settings.component.css'
})
export class FinancesSettingsComponent implements OnInit
{
  public sources: Array<SourceDetails> = [];
  
  get sourceTypes()
  {
    return Object.values(SourceType);
  }

  constructor(private sourceState: SourceState){}

  ngOnInit(): void 
  {
    this.sources = this.sourceState.getSources;
  }

  getSourcesByType(type: SourceType)
  {
    return this.sources.filter(source => source.sourceType === type);
  }
}
