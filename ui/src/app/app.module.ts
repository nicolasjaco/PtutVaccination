import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatDatepickerModule} from '@angular/material/datepicker';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatCheckboxModule} from '@angular/material/checkbox';

import { CalendrierComponent } from './components/calendrier/calendrier.component';
import { ChronologieComponent } from './components/chronologie/chronologie.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { DialogRappelComponent } from './dialog-rappel/dialog-rappel.component';
import { AjoutVaccinComponent } from './components/ajout-vaccin/ajout-vaccin.component';
import { DialogueAjoutVaccComponent } from './components/dialogue-ajout-vacc/dialogue-ajout-vacc.component';





@NgModule({
  declarations: [
    AppComponent,
    CalendrierComponent,
    ChronologieComponent,
    DocumentsComponent,
    DialogRappelComponent,
    AjoutVaccinComponent,
    DialogueAjoutVaccComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule,
    MatTabsModule,
    MatCardModule,
    MatStepperModule,
    MatDialogModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatCheckboxModule
  ],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS,
    useValue: { displayDefaultIndicatorType: false }
  }],
  bootstrap: [AppComponent],
  entryComponents: [DialogRappelComponent]
})
export class AppModule { }
