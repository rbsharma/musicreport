import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TableComponent } from "./table/table.component";
import { FifaHeaderComponent } from "./fifa-header/fifa-header.component";

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        TableComponent,
        FifaHeaderComponent
    ],
    providers: [],
    exports: [
        TableComponent,
        FifaHeaderComponent
    ]
})
export class MainModule { }
