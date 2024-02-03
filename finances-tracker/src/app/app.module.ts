import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppHeaderComponent } from './app-header/app-header.component';
import { FinancesSettingsComponent } from './finances-configuration/finances-settings/finances-settings.component';
import { SourceResultComponent } from './finances-configuration/source-result/source-result.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    FinancesSettingsComponent,
    SourceResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
