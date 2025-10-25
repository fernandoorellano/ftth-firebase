import { Component, OnInit } from '@angular/core';
import { FechaService } from 'src/app/servicios/fecha.service';
import { ListadofireService } from 'src/app/servicios/listadofire.service';

@Component({
  selector: 'app-controlpago',
  templateUrl: './controlpago.component.html',
  styleUrls: ['./controlpago.component.css']
})
export class ControlpagoComponent implements OnInit {

 constructor(public listadoFireServ : ListadofireService, public fechaServ: FechaService) { }
      
    
  ngOnInit(): void {
    this.listadoFireServ.obtenerDatosAbonado()
  }

  enviarMensaje(cel: string){
    let url = "https://wa.me/+549"+cel+"?text=Hola!%20%F0%9F%91%8B%20%20Hoy%20tenes%20que%20abonar%20";
    window.open(url, "_blank");
  }

}
