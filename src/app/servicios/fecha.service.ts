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

    fechaNueva: any = [];

    constructor() { }

    calculoDiaRestante(datos: any){
      this.reiniciarCalculoDias()
      for (let index = 0; index < datos.length; index++) {
        let diaNumerico = datos[index].fecha.slice(0, 2);
        let mesNumerico = datos[index].fecha.slice(2, 4);
        
        this.fechaNueva[index] = datos[index].fecha.slice(0, 2)+'-'+datos[index].fecha.slice(2, 4)+"-"+datos[index].fecha.slice(4, 6)
        
        let resultadoDiferencia = diaNumerico - this.fechaDiaActualNumerica;
        let resultadoMesDiferencia = this.fechaMesActualNumerica - mesNumerico;

        if((resultadoDiferencia >= 1) && (resultadoDiferencia <= 2) && (datos[index].pagoOctubre != "P" || datos[index].pagoOctubre != "p") ){
          let mensaje = datos[index].identificador+".-"+datos[index].descripcion+" - ("+this.fechaNueva[index]+").";
          this.mensajePagoFuturo.push(mensaje);
        }else
        if((resultadoDiferencia < 0 &&  datos[index].pagoOctubre != "P" && (datos[index].pagoOctubre != "P" || datos[index].pagoOctubre != "p") )){
          let mensaje = index+1+"-("+datos[index].identificador+")."+datos[index].descripcion+" ---> ("+this.fechaNueva[index]+").";          
          this.mensajePagoAnteriores.push(mensaje);
        }
        else
        if((diaNumerico == this.fechaDiaActualNumerica) && (datos[index].pagoOctubre != "P" && datos[index].pagoOctubre != "p") ){
          let mensaje = index+1+"-("+datos[index].identificador+").-"+datos[index].descripcion+" - ("+this.fechaNueva[index]+").";
          this.mensajePagoActual.push(mensaje);
        }else
        if((datos[index].pagoSeptiembre != "P" && datos[index].pagoSeptiembre != "p")){
          let mensaje = index+1+"-("+datos[index].identificador+")."+datos[index].descripcion+" ---> ("+this.fechaNueva[index]+").";          
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
