import { Component, OnInit } from '@angular/core';
import { FechaService } from 'src/app/servicios/fecha.service';
import { ListadofireService } from 'src/app/servicios/listadofire.service';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  constructor(public listadoFireServ : ListadofireService, public fechaServ: FechaService) { }
        
      
  ngOnInit(): void {
      this.listadoFireServ.obtenerDatosAbonado()
  }

}
