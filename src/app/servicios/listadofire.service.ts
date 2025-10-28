import { Injectable } from '@angular/core';
import { Abonado } from '../interfaces/abonado';
import { FirebaseService } from './firebase.service';
import { FechaService } from './fecha.service';

@Injectable({
  providedIn: 'root'
})
export class ListadofireService {

    abonado: Abonado[] = [];
  
    constructor( private data: FirebaseService, public fechaSer: FechaService) {}
    
    ngOnInit(): void {}
  
    obtenerDatosAbonado(){
      this.data.obtenerDatos().subscribe(res=>{
        this.abonado = res.map((e:any)=>{
          const data = e.payload.doc.data();
          data.id = e.payload.doc.id;
          return data;
        });
        this.fechaSer.calculoDiaRestante(this.abonado);
      },err =>{
        alert("ERROR")
      });
      this.fechaSer.reiniciarCalculoDias();
    }
  
    crearAbonado(nuevoAbonado: any){
      this.data.crearDatos(nuevoAbonado);
    }
  
    actualizarAbonado(item: any, fecha: any){
      // item.fecha = fecha;
      this.data.actualizarDatos(item);
    }
  
  
    eliminarAbonado(abonado: Abonado){
      this.data.eliminarDatos(abonado);
    }

    actualizarPago(pago:string, abonado: any){
      switch(this.fechaSer.fechaMesActualNumerica){
           case 5:
            abonado.pagoMayo = pago;
          break;
          case 6:
            abonado.pagoJunio = pago;
          break;
          case 7:
            abonado.pagoJulio = pago;
          break;
          case 8: 
            abonado.pagoAgosto = pago;
          break;
          case 9:
            abonado.pagoSeptiembre = pago;
          break;
          case 10:
            abonado.pagoOctubre = pago;
          break;
          case 11: 
            abonado.pagoNoviembre = pago;
          break;
          case 12: 
            abonado.pagoDiciembre = pago;
          break;
      }
      this.actualizarAbonado(abonado, abonado.fecha);
    }
  
}
