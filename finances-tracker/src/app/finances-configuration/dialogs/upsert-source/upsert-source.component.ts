import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SourceDetails } from '../../../models/source-details';
import { SourceType } from '../../../models/source-type.enum';
import { SourceState } from '../../../states/source-state';

@Component({
  selector: 'app-upsert-source',
  templateUrl: './upsert-source.component.html',
  styleUrl: './upsert-source.component.css'
})
export class UpsertSourceComponent 
{
  isNewSource: boolean = false;
  source: SourceDetails;
  private originSource: SourceDetails;
  constructor(
    public dialogRef: MatDialogRef<UpsertSourceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private sourceState: SourceState
  ) 
  {
    this.isNewSource = !data.source;
    this.source = this.originSource = this.isNewSource ? new SourceDetails('', 0, data.sourceType, '', new Date()) : data.source;
  }

  get getSourceOperation()
  {
    return this.isNewSource ? "Add" : "Update";
  }

  isSaveDisabled()
  {
    return this.source.name.trim() === '' || this.source.amount === 0 || this.source.tag.trim() === '';
  }

  saveChanges()
  {
    if(this.isNewSource)
    {
      this.addNewSource();
    }
    else
    {
      this.updateSource();
    }
    this.close();
  }

  private addNewSource()
  {
    this.sourceState.addSource(this.source);
  }

  private updateSource()
  {
    this.sourceState.removeSource(this.originSource);
    this.sourceState.addSource(this.source);
  }

  close()
  {
    this.dialogRef.close();
  }
}
