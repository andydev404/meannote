import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from "@angular/http";
import {ReactiveFormsModule} from "@angular/forms"
/**
 * Routes
 */
import {ROUTES} from "./app.route"

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ExcerptPipe } from './pipes/excerpt.pipe';
import { NewnoteComponent } from './components/newnote/newnote.component';
import { ViewnoteComponent } from './components/viewnote/viewnote.component';
import { UpdatenoteComponent } from './components/updatenote/updatenote.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ExcerptPipe,
    NewnoteComponent,
    ViewnoteComponent,
    UpdatenoteComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ROUTES,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
