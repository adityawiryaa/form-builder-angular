import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ClipboardModule } from '@angular/cdk/clipboard';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AswFormBuilderModule } from '@asoftwareworld/form-builder/form-builder';
import { AswPreviewTemplateModule } from '@asoftwareworld/form-builder/preview-template';
import { AswAutocompleteModule } from '@asoftwareworld/form-builder/form-control/autocomplete';
import { AswButtonModule } from '@asoftwareworld/form-builder/form-control/button';
import { AswCalculationModule } from '@asoftwareworld/form-builder/form-control/calculation';
import { AswCheckboxModule } from '@asoftwareworld/form-builder/form-control/checkbox';
import { AswDatepickerModule } from '@asoftwareworld/form-builder/form-control/datepicker';
import { AswJsonPreviewDialogModule } from '@asoftwareworld/form-builder/form-control/json-preview-dialog';
import { AswMultiSelectModule } from '@asoftwareworld/form-builder/form-control/multi-select';
import { AswNumberModule } from '@asoftwareworld/form-builder/form-control/number';
import { AswParagraphModule } from '@asoftwareworld/form-builder/form-control/paragraph';
import { AswRadioButtonModule } from '@asoftwareworld/form-builder/form-control/radio-button';
import { AswSelectModule } from '@asoftwareworld/form-builder/form-control/select';
import { AswSlideToggleModule } from '@asoftwareworld/form-builder/form-control/slide-toggle';
import { AswTextareaModule } from '@asoftwareworld/form-builder/form-control/textarea';
import { AswTextFieldModule } from '@asoftwareworld/form-builder/form-control/textfield';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AswFormBuilderModule,
    AswPreviewTemplateModule,
    AswSlideToggleModule,
    AswTextareaModule,
    AswTextFieldModule,
    AswRadioButtonModule,
    AswJsonPreviewDialogModule,
    AswNumberModule,
    AswCalculationModule,
    AswAutocompleteModule,
    AswButtonModule,
    AswCheckboxModule,
    AswDatepickerModule,
    AswMultiSelectModule,
    AswParagraphModule,
    AswSelectModule,
    DragDropModule,
    ClipboardModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
