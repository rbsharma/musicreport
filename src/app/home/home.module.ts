import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CategoryComponent } from "./category/category.component";

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        CategoryComponent
    ],
    providers: [],
    exports: [
        CategoryComponent
    ]
})
export class HomeModule { }
