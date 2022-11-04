import { ExtraOptions, RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './components/home/home.component'
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component'
import { ContactoComponent } from './components/contacto/contacto.component'

const APP_ROUTES:Routes=[
    { path: 'home', component: HomeComponent },
    { path: 'quienes', component: QuienesSomosComponent },
    { path: 'contacto', component: ContactoComponent },


    //Ruta por defecto
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

const routerOptions: ExtraOptions = {
    anchorScrolling: "enabled"
    //scrollPositionRestoration: "enabled"
};

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, routerOptions);