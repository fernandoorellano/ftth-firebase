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

}
