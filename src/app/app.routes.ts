import { Routes, RouterModule } from '@angular/router';
import { FifaComponent } from './fifa/fifa.component';
//import { RestrictRoutesService } from './services';

const appRoutes: Routes = [
    { path: '', redirectTo: 'fifa', pathMatch: 'full' },
    { path: 'fifa', component: FifaComponent },
    { path: '**', component: FifaComponent }

];
//export const routing = RouterModule.forRoot(appRoutes);
export const AppRouting = RouterModule.forRoot(appRoutes, { useHash: true });
