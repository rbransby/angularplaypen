import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WpsTableComponent, SuspendDialog } from './wps-table/wps-table.component';
import { MatTableModule } from '@angular/material' 
import {MatFormFieldModule} from '@angular/material'; 
import {MatInputModule} from '@angular/material'; 
import { MomentModule } from 'ngx-moment';
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu'

@NgModule({
  declarations: [
    AppComponent,
    WpsTableComponent,
    SuspendDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MomentModule,
    MatButtonModule,
    MatSlideToggleModule,
    FormsModule,
    MatCardModule,
    MatPaginatorModule,
    MatDialogModule,
    MatMenuModule
  ],
  entryComponents: [
    SuspendDialog
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
