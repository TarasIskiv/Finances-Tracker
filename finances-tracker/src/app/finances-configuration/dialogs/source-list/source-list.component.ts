import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SourceDetails } from '../../../models/source-details';
import { SourceType } from '../../../models/source-type.enum';
import { SourceState } from '../../../states/source-state';

@Component({
  selector: 'app-source-list',
  templateUrl: './source-list.component.html',
  styleUrl: './source-list.component.css'
})
export class SourceListComponent 
{
  sourceType: SourceType;
  sources: SourceDetails[] = [];

  constructor(public dialogRef: MatDialogRef<SourceListComponent>,
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

  }

  close()
  {
    this.dialogRef.close();
  }
}
