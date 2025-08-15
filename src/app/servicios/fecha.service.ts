  import { Injectable } from '@angular/core';

  @Injectable({
    providedIn: 'root'
  })
  export class FechaService {

    fecha : any = new Date();
    fechaDiaActualNumerica = this.fecha.getDate();
    fechaMesActualNumerica = this.fecha.getMonth()+1;

    mensajePagoActual : any = [];
    mensajePagoAnteriores : any = [];
    mensajePagoFuturo: any = [];



    mensajePagoDosDias : any = [];
    mensajePagoTresDias : any = []; 

    constructor() { }

    calculoDiaRestante(datos: any){
      for (let index = 0; index < datos.length; index++) {
        let diaNumerico = datos[index].fecha.slice(0, 2);
        let resultadoDiferencia = diaNumerico - this.fechaDiaActualNumerica;

        if((diaNumerico == this.fechaDiaActualNumerica) && (datos[index].pagoAgosto != "P" || datos[index].pagoAgosto != "p") ){
          let mensaje = datos[index].descripcion+" - ("+datos[index].fecha+").";
          this.mensajePagoActual.push(mensaje);
        }
        if((resultadoDiferencia >= 1) && (resultadoDiferencia <= 2) && (datos[index].pagoAgosto != "P" || datos[index].pagoAgosto != "p") ){
          let mensaje = datos[index].descripcion+" - ("+datos[index].fecha+").";
          this.mensajePagoFuturo.push(mensaje);
        }
        if((resultadoDiferencia < 0 &&  datos[index].pagoAgosto != "P" && datos[index].pagoAgosto != "p")){
          let mensaje = datos[index].descripcion+" - ("+datos[index].fecha+").";          
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
