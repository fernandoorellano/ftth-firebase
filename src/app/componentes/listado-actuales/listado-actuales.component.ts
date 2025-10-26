import { Component, OnInit } from '@angular/core';
import { FechaService } from 'src/app/servicios/fecha.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-listado-actuales',
  templateUrl: './listado-actuales.component.html',
  styleUrls: ['./listado-actuales.component.css']
})
export class ListadoActualesComponent implements OnInit {

  constructor(public fechaServ: FechaService) { }

  ngOnInit(): void {
  }

  enviarMensaje(cel: string){
    let url = environment.inicioTextoUrl+cel+environment.cuerpoTextoUrl;
    window.open(url, "_blank");
  }

}
