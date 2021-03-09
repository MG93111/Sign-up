import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { SaveComponent } from './save/save.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    SaveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
