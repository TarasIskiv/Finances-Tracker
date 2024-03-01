import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { SourceDetails } from '../../models/source-details';
import { SourceType } from '../../models/source-type.enum';
import { MatDialog } from '@angular/material/dialog';
import { SourceListComponent } from '../dialogs/source-list/source-list.component';
import { UpsertSourceComponent } from '../dialogs/upsert-source/upsert-source.component';

@Component({
  selector: 'app-source-result',
  templateUrl: './source-result.component.html',
  styleUrl: './source-result.component.css'
})
export class SourceResultComponent 
{
  @Input() sourceType: SourceType = SourceType.Income;
  @Input() sources: Array<SourceDetails> = [];
  color: string = 'primary'

  constructor(public dialog: MatDialog, private changeDetector: ChangeDetectorRef) {}

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

  viewSources()
  {
    const dialogRef = this.dialog.open(SourceListComponent, 
    {
      
      data: {sources: this.sources, sourceType: this.sourceType},
    
      width: '400px',
      height: '400px'
    });
    dialogRef.afterClosed().subscribe(() => this.changeDetector.detectChanges())
  }

  addSource()
  {
    const dialogRef = this.dialog.open(UpsertSourceComponent, 
      {
        
        data: {sources: null, sourceType: this.sourceType},
      
        width: '400px',
        height: '400px'
      });
    dialogRef.afterClosed().subscribe(() => this.changeDetector.detectChanges())
  }
}
