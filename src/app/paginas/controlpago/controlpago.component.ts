import { Component, OnInit } from '@angular/core';
import { FechaService } from 'src/app/servicios/fecha.service';
import { ListadofireService } from 'src/app/servicios/listadofire.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-controlpago',
  templateUrl: './controlpago.component.html',
  styleUrls: ['./controlpago.component.css']
})
export class ControlpagoComponent implements OnInit {

 constructor(public listadoFireServ : ListadofireService, public fechaServ: FechaService) {}
    
  ngOnInit(): void {
    this.listadoFireServ.obtenerDatosAbonado()
  }

  enviarMensaje(cel: string){
    let url = environment.inicioTextoUrl+cel+environment.cuerpoTextoUrl;
    window.open(url, "_blank");
  }

}
