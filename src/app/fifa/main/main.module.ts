import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MainTableComponent } from "./main-table/main-table.component";
import { TableComponent } from "./table/table.component";
import { FifaHeaderComponent } from "./fifa-header/fifa-header.component";

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    MainTableComponent,
    TableComponent,
    FifaHeaderComponent
  ],
  providers: [],
  exports: [
    MainTableComponent,
    TableComponent,
    FifaHeaderComponent
  ]
})
export class MainModule { }
