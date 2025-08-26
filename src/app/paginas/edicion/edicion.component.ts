import { Component, OnInit } from '@angular/core';
import { FechaService } from 'src/app/servicios/fecha.service';
import { ListadofireService } from 'src/app/servicios/listadofire.service';

@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.css']
})
export class EdicionComponent implements OnInit {

   constructor(public listadoFireServ : ListadofireService, public fechaServ: FechaService) { }
      
    
      ngOnInit(): void {
        this.listadoFireServ.obtenerDatosAbonado()
      }

}
