import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppHeaderComponent } from './app-header/app-header.component';
import { FinancesSettingsComponent } from './finances-configuration/finances-settings/finances-settings.component';
import { SourceResultComponent } from './finances-configuration/source-result/source-result.component';
import {MatChipsModule} from '@angular/material/chips';
import { SourceState } from './states/source-state';
import { ChartsListComponent } from './charts/charts-list/charts-list.component';
import { ChartComponent } from './charts/chart/chart.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { UpsertSourceComponent } from './finances-configuration/dialogs/upsert-source/upsert-source.component';
import { SourceListComponent } from './finances-configuration/dialogs/source-list/source-list.component';
import {MatDialogModule} from '@angular/material/dialog';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    FinancesSettingsComponent,
    SourceResultComponent,
    ChartsListComponent,
    ChartComponent,
    UpsertSourceComponent,
    SourceListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatChipsModule,
    CanvasJSAngularChartsModule,
    MatGridListModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [SourceState, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
