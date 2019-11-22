import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
  MatIconModule, MatButtonModule, MatSidenavModule, MatToolbarModule, MatListModule
} from '@angular/material';

@NgModule({
  imports:      [
     BrowserModule, FormsModule, FlexLayoutModule, BrowserAnimationsModule,
     MatIconModule, MatButtonModule, MatSidenavModule, MatToolbarModule, MatListModule
   ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
