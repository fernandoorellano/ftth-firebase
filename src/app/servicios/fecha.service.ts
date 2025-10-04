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
        let nombreMesActual : any = [];
        let nombreMesAnterior : any = [];

        switch(this.fechaMesActualNumerica){
          case 5:
            nombreMesActual.push(datos[index].pagoMayo);
          break;
          case 6:
            nombreMesActual.push(datos[index].pagoJunio);
            nombreMesAnterior.push(datos[index].pagoMayo);
          break;
          case 7:
            nombreMesActual.push(datos[index].pagoJulio);
            nombreMesAnterior.push(datos[index].pagoJunio);
          break;
          case 8: 
            nombreMesActual.push(datos[index].pagoAgosto);
            nombreMesAnterior.push(datos[index].pagoJulio);
          break;
          case 9:
            nombreMesActual.push(datos[index].pagoSeptiembre);
            nombreMesAnterior.push(datos[index].pagoAgosto);
          break;
          case 10:
            nombreMesActual.push(datos[index].pagoOctubre);
            nombreMesAnterior.push(datos[index].pagoSeptiembre);
          break;
          case 11: 
            nombreMesActual.push(datos[index].pagoNoviembre);
            nombreMesAnterior.push(datos[index].pagoOctubre);
          break;
          case 12: 
            nombreMesActual.push(datos[index].pagoDiciembre);
            nombreMesAnterior.push(datos[index].pagoNoviembre);
          break;
        }
        
        this.fechaNueva[index] = datos[index].fecha.slice(0, 2)+'-'+datos[index].fecha.slice(2, 4)+"-"+datos[index].fecha.slice(4, 6)
        let resultadoDiferencia = diaNumerico - this.fechaDiaActualNumerica;

        if((resultadoDiferencia < 0 &&  nombreMesActual[0] != "P" && (nombreMesActual[0] != "P" || nombreMesActual[0] != "p") )){
          let mensaje = index+1+"_("+datos[index].identificador+"). "+datos[index].descripcion+" --> "+this.fechaNueva[index];          
          this.mensajePagoAnteriores.push(mensaje);
        }
        else
        if((diaNumerico == this.fechaDiaActualNumerica) && (nombreMesActual[0] != "P" && nombreMesActual[0] != "p") ){
          let mensaje = index+1+"_("+datos[index].identificador+"). "+datos[index].descripcion+" --> "+this.fechaNueva[index];
          this.mensajePagoActual.push(mensaje);
        }else
        if((nombreMesAnterior[0] != "P" && nombreMesAnterior[0] != "p")){
          let mensaje = index+1+"_("+datos[index].identificador+"). "+datos[index].descripcion+" --> "+this.fechaNueva[index];          
          this.mensajePagoAnteriores.push(mensaje);
        }
      }
    }

    reiniciarCalculoDias(){
      this.mensajePagoActual = [];
      this.mensajePagoFuturo = [];
      this.mensajePagoAnteriores = [];
    }

    cambiarMesActual(){
      let mes : any = new Date();
      console.log(mes.toLocaleString('es-ES', { month: 'long' }).toUpperCase().slice(0, 1) + mes.toLocaleString('es-ES', { month: 'long' }).slice(1));
    }
  }
