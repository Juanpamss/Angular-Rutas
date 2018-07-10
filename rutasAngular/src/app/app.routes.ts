import {Routes} from "@angular/router";
import {RutaInicioComponent} from "./ruta-inicio/ruta-inicio.component";
import {RutaNoEncontradaComponent} from "./ruta-no-encontrada/ruta-no-encontrada.component";
import {RutaFAQComponent} from "./ruta-faq/ruta-faq.component";
import {RutaIniUsuarioComponent} from "./ruta-ini-usuario/ruta-ini-usuario.component";
import {RutaIniPermisosComponent} from "./ruta-ini-permisos/ruta-ini-permisos.component";
import {AutorizacionService} from "./autorizacion.service";

export const RUTAS_APP: Routes = [
  {
    path: 'inicio/hola/como/estas',
    component: RutaInicioComponent,
    children: [
      {
        path: 'usuario/:pepito/activo/:estaActivo',
        component: RutaIniUsuarioComponent
      },
      {
        path: 'permisos',
        component: RutaIniPermisosComponent,
        canActivate: [
          AutorizacionService
        ]
      },
      {
        path: '',
        redirectTo: 'usuario/1/activo/true',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: 'faq',
    component: RutaFAQComponent,
    canActivate: [
      // AutorizacionService
    ],
  },
  {
    path: '',
    redirectTo: 'inicio/hola/como/estas',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: RutaNoEncontradaComponent
  }
];
