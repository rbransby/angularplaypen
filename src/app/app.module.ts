import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WpsTableComponent } from './wps-table/wps-table.component';
import { MatTableModule } from '@angular/material' 
import {MatFormFieldModule} from '@angular/material'; 
import {MatInputModule} from '@angular/material'; 

@NgModule({
  declarations: [
    AppComponent,
    WpsTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
