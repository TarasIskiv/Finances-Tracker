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

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    FinancesSettingsComponent,
    SourceResultComponent,
    ChartsListComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatChipsModule,
    CanvasJSAngularChartsModule,
    MatGridListModule
  ],
  providers: [SourceState],
  bootstrap: [AppComponent]
})
export class AppModule { }
