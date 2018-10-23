import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MainModule } from "./main/main.module";
import { FifaComponent } from "./fifa.component";
import { FifaRoutingModule } from "./fifa.routes";

@NgModule({
    imports: [
        BrowserModule,
        FifaRoutingModule,
        MainModule
    ],
    declarations: [
        FifaComponent
    ],
    providers: [],
    exports: [
        FifaComponent
    ]
})
export class FifaModule { }
