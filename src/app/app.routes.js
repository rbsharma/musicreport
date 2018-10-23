"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var fifa_component_1 = require("./fifa/fifa.component");
//import { RestrictRoutesService } from './services';
var appRoutes = [
    { path: '', redirectTo: 'fifa', pathMatch: 'full' },
    { path: 'fifa', component: fifa_component_1.FifaComponent },
    { path: '**', component: fifa_component_1.FifaComponent }
];
//export const routing = RouterModule.forRoot(appRoutes);
exports.AppRouting = router_1.RouterModule.forRoot(appRoutes, { useHash: true });
//# sourceMappingURL=app.routes.js.map