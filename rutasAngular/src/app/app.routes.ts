import {Routes} from "@angular/router";
import {RutaInicioComponent} from "./ruta-inicio/ruta-inicio.component";

const RUTAS_APP: Routes = [

  {
    path: 'inicio',
    component: RutaInicioComponent

  },

  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'

  },

]
