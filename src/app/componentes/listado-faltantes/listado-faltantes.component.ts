import { Component, OnInit } from '@angular/core';
import { FechaService } from 'src/app/servicios/fecha.service';

@Component({
  selector: 'app-listado-faltantes',
  templateUrl: './listado-faltantes.component.html',
  styleUrls: ['./listado-faltantes.component.css']
})
export class ListadoFaltantesComponent implements OnInit {

  constructor(public listadoServ: FechaService) { }

  ngOnInit(): void {
  }

}
