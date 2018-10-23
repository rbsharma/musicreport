import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FifaHomeComponent } from './fifa-home.component'
import { FifaHomeRoutingModule, routedComponents } from "./fifa-home.routes";
@NgModule({
  imports: [
    CommonModule,
    FifaHomeRoutingModule
  ],
  declarations: [
    FifaHomeComponent,
    ...routedComponents
  ]
})
export class FifaHomeModule { }
