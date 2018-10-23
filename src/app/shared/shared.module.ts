import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        HeaderComponent,
        FooterComponent
    ],
    providers: [],
    exports: [
        HeaderComponent,
        FooterComponent
    ]
})
export class SharedModule { }
