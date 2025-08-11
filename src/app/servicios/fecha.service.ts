  import { Injectable } from '@angular/core';

  @Injectable({
    providedIn: 'root'
  })
  export class FechaService {

    fecha : any = new Date();
    fechaDiaActualNumerica = this.fecha.getDate();

    mensajePagoActual : any = [];
    mensajePagoAnteriores : any = [];
    mensajePagoFuturo: any = [];



    mensajePagoDosDias : any = [];
    mensajePagoTresDias : any = []; 

    constructor() { }

    calculoDiaRestante(datos: any){
      for (let index = 0; index < datos.length; index++) {
        if((datos[index].fecha.slice(0, 2) == this.fechaDiaActualNumerica) && (datos[index].pagoAgosto != "p") ){
          /**let mensaje = "ID_"+datos[index].identificador+"("+datos[index].fecha+")."; */
          let mensaje = datos[index].descripcion+"("+datos[index].fecha+").";
          this.mensajePagoActual.push(mensaje);
        }
        if(((datos[index].fecha.slice(0, 2) - this.fechaDiaActualNumerica) >= 1) && ((datos[index].fecha.slice(0, 2) - this.fechaDiaActualNumerica) <= 2) && (datos[index].pagoAgosto != "p") ){
          /*let mensaje = "ID_"+datos[index].identificador+"(QUEDA "+ (datos[index].fecha.slice(0, 2) - this.fechaDiaActualNumerica)+" DIA).";*/
          let mensaje = datos[index].descripcion+"("+datos[index].fecha+").";
          this.mensajePagoFuturo.push(mensaje);
        }
        if(((this.fechaDiaActualNumerica - datos[index].fecha.slice(0, 2)) > 0) && ((this.fechaDiaActualNumerica - datos[index].fecha.slice(0, 2)) <= 1) && (datos[index].pagoAgosto != "p") ){
          /*let mensaje = "ID_"+datos[index].identificador+"(QUEDA "+ (datos[index].fecha.slice(0, 2) - this.fechaDiaActualNumerica)+" DIA).";*/
          let mensaje = datos[index].descripcion+"("+datos[index].fecha+").";          
          this.mensajePagoAnteriores.push(mensaje);
        }
        if(((this.fechaDiaActualNumerica - datos[index].fecha.slice(0, 2)) > 1) && (datos[index].pagoAgosto != "p") ){
          /*let mensaje = "ID_"+datos[index].identificador+"(QUEDA "+ (datos[index].fecha.slice(0, 2) - this.fechaDiaActualNumerica)+" DIA).";*/
          let mensaje = datos[index].descripcion+"("+datos[index].fecha+").";          
          this.mensajePagoAnteriores.push(mensaje);
        }
      }
    }

    reiniciarCalculoDias(){
      this.mensajePagoActual = [];
      this.mensajePagoFuturo = [];
      this.mensajePagoAnteriores = [];
    }
  }
