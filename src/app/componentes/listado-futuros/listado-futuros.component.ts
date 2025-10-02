import { Component, OnInit } from '@angular/core';
import { FechaService } from 'src/app/servicios/fecha.service';

@Component({
  selector: 'app-listado-futuros',
  templateUrl: './listado-futuros.component.html',
  styleUrls: ['./listado-futuros.component.css']
})
export class ListadoFuturosComponent implements OnInit {

  constructor(public listadoServ: FechaService) { }

  ngOnInit(): void {
  }

}
