import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapChartComponent } from './map-chart/map-chart.component';
import {BrowserModule} from "@angular/platform-browser";
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
