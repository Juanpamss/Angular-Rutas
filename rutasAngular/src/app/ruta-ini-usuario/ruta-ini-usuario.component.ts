import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-ruta-ini-usuario',
  templateUrl: './ruta-ini-usuario.component.html',
  styleUrls: ['./ruta-ini-usuario.component.css']
})
export class RutaIniUsuarioComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    console.log("Principio")

    const observableParametros$ = this._activatedRoute.params;


    observableParametros$.subscribe(

      (respuestaOK) => {

        console.log('Ok', respuestaOK);

      }, (respuestaError) => {


        console.log('Error', respuestaError)

      },

      () => {


        console.log("Completado")

      }

    );

    console.log("Fin")

  }

}
