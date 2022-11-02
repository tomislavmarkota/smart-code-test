import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main-content/main/main.component';
import { DescriptionComponent } from './components/main-content/description/description.component';
import { KeywordsComponent } from './components/main-content/keywords/keywords.component';
import { PhotographyComponent } from './components/main-content/photography/photography.component';
import { AuthorDetailsComponent } from './components/main-content/author-details/author-details.component';
import { PhotoSizePickerComponent } from './components/sidebar/photo-size-picker/photo-size-picker.component';
import { SidebarButtonsComponent } from './components/sidebar/sidebar-buttons/sidebar-buttons.component';
import { SpecialNotesComponent } from './components/sidebar/special-notes/special-notes.component';
import { SidebarMainComponent } from './components/sidebar/sidebar-main/sidebar-main.component';
import { MaterialModule } from './modules/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipComponent } from './components/shared/tooltip/tooltip.component';
import { ButtonComponent } from './components/sidebar/sidebar-buttons/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DescriptionComponent,
    KeywordsComponent,
    PhotographyComponent,
    AuthorDetailsComponent,
    PhotoSizePickerComponent,
    SidebarButtonsComponent,
    SpecialNotesComponent,
    SidebarMainComponent,
    TooltipComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
