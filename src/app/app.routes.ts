import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './components/home/home.component'
import { ReporteComponent } from './components/reporte/reporte.component'
import { ContratarComponent } from './components/contratar/contratar.component'

const APP_ROUTES:Routes=[
    { path: 'home', component: HomeComponent },
    { path: 'reporte', component: ReporteComponent },
    { path: 'contratar', component: ContratarComponent },


    //Ruta por defecto
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {relativeLinkResolution: 'legacy'});