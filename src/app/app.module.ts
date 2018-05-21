import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { SupervillainsComponent } from './supervillains/supervillains.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    SupervillainsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
