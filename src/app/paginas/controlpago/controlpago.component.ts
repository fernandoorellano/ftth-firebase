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
    let url = "https://wa.me/+549"+cel+"?text=Hola%20Cómo%20estás?%20Esperamos%20que%20bien%20%F0%9F%98%8A%20%0AHoy%20sería%20la%20fecha%20de%20cobro.%20Abonarías%20en%20efectivo%20o%20transferencia?";
    window.open(url, "_blank");
  }

}
