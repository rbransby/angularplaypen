import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WpsTableComponent} from './wps-table/wps-table.component';
import {AppComponent} from './app.component';

const routes: Routes = [{path: '', component:AppComponent},
  {path: 'wpstable', component: WpsTableComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
