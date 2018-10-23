import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FifaHomeComponent } from "./fifa-home.component";
const routes: Routes = [{
    path: 'final',
    component: FifaHomeComponent,
    children: [
        {
            path: '',
            component: FifaHomeComponent
        }
    ]
},

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FifaHomeRoutingModule {
}

export const routedComponents = [
    FifaHomeComponent
]