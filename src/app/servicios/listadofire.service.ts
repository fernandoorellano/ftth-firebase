import { Injectable } from '@angular/core';
import { Abonado } from '../interfaces/abonado';
import { FirebaseService } from './firebase.service';
import { FechaService } from './fecha.service';

@Injectable({
  providedIn: 'root'
})
export class ListadofireService {

    abonado: Abonado[] = [];
    datosAbonado: any;
  
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

    controlPagos(pago: string, mesAnterior: string, mesActual: string){
      if(mesAnterior != 'p' && mesAnterior != 'P'){
            mesAnterior = pago;
          }else
      {mesActual = pago;}
    }

    actualizarPago(pago:string, abonado: any){
      switch(this.fechaSer.fechaMesActualNumerica){
          case 5:
            abonado.pagoMayo = pago;
          break;
          case 6:
          if(abonado.pagoMayo != 'p' && abonado.pagoMayo != 'P'){
              abonado.pagoMayo = pago;
            }else
            {abonado.pagoJunio = pago;}
          break;
          case 7:
            if(abonado.pagoJunio != 'p' && abonado.pagoJunio != 'P'){
              abonado.pagoJunio = pago;
            }else
            {abonado.pagoJulio = pago;}
          break;
          case 8:
              if(abonado.pagoJulio != 'p' && abonado.pagoJulio != 'P'){
              abonado.pagoJulio = pago;
            }else
            {abonado.pagoAgosto = pago;}
          break;
          case 9:
            if(abonado.pagoAgosto != 'p' && abonado.pagoAgosto != 'P'){
              abonado.pagoAgosto = pago;
            }else
            {abonado.pagoSeptiembre = pago;}
          break;
          case 10:
            if(abonado.pagoSeptiembre != 'p' && abonado.pagoSeptiembre != 'P'){
              abonado.pagoSeptiembre = pago;
            }else
            {abonado.pagoOctubre = pago;}
          break;
          case 11:
            if(abonado.pagoOctubre != 'p' && abonado.pagoOctubre != 'P'){
              abonado.pagoOctubre = pago;
            }else
            {abonado.pagoNoviembre = pago;}
          break;
          case 12:
            if(abonado.pagoNoviembre != 'p' && abonado.pagoNoviembre != 'P'){
              abonado.pagoNoviembre = pago;
            }else
            {abonado.pagoDiciembre = pago;}
          break;
      }
      this.actualizarAbonado(abonado, abonado.fecha);
    }
  
}
