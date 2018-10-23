import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";
import { HomeModule } from "./home/home.module";
import { AppRouting } from "./app.routes";
import { FifaModule  } from "./fifa/fifa.module";

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    AppRouting,
    HomeModule,
    FifaModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
