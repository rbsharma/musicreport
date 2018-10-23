import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FifaComponent } from './fifa.component';

const routes: Routes = [
  { path: 'fifa', component: FifaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FifaRoutingModule {
}

