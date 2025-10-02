import { Component, OnInit } from '@angular/core';
import { FechaService } from 'src/app/servicios/fecha.service';

@Component({
  selector: 'app-listado-actuales',
  templateUrl: './listado-actuales.component.html',
  styleUrls: ['./listado-actuales.component.css']
})
export class ListadoActualesComponent implements OnInit {

  constructor(public listadoServ: FechaService) { }

  ngOnInit(): void {
  }

}
