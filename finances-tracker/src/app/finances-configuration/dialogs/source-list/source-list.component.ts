import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SourceDetails } from '../../../models/source-details';
import { SourceType } from '../../../models/source-type.enum';
import { SourceState } from '../../../states/source-state';
import { UpsertSourceComponent } from '../upsert-source/upsert-source.component';

@Component({
  selector: 'app-source-list',
  templateUrl: './source-list.component.html',
  styleUrl: './source-list.component.css'
})
export class SourceListComponent 
{
  sourceType: SourceType;
  sources: SourceDetails[] = [];

  constructor(public dialogRef: MatDialogRef<SourceListComponent>, public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any, private sourceState: SourceState) 
  {
    this.sources = data.sources as SourceDetails[];
    this.sourceType = data.sourceType as SourceType;
  }

  removeSource(source: SourceDetails)
  {
    this.sourceState.removeSource(source);
    this.close();
  }

  editSource(source: SourceDetails)
  {
    const updateDialog = this.dialog.open(UpsertSourceComponent, 
      {
        
        data: {source: source, sourceType: this.sourceType},
      
        width: '400px',
        height: '400px'
      });
      updateDialog.afterClosed().subscribe(() => this.close())
  }

  close()
  {
    this.dialogRef.close();
  }
}
