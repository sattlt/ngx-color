import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.module.routing';
import { DarkerComponent } from './tutorial/darker/darker.component';
import { HomeComponent } from './tutorial/home/home.component';
import { LighterDarkerComponent } from './tutorial/lighter-darker/lighter-darker.component';
import { LighterComponent } from './tutorial/lighter/lighter.component';
import { NamesComponent } from './tutorial/names/names.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NamesComponent,
    LighterComponent,
    DarkerComponent,
    LighterDarkerComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
