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

    mostrarDato = false;

    nombreMesActual : any = [];
    nombreMesAnterior : any = [];

    celularPagoActual: any = [];
    celularPagoAnterior: any = [];

    btnWhatsapp: any = [];

    constructor() {}

    calculoDiaRestante(datos: any){
      this.reiniciarCalculoDias()
      for (let index = 0; index < datos.length; index++) {
      
        let diaNumerico = datos[index].fecha.slice(0, 2);

        switch(this.fechaMesActualNumerica){
          case 5:
            this.nombreMesActual.push(datos[index].pagoMayo);
          break;
          case 6:
            this.nombreMesActual.push(datos[index].pagoJunio);
            this.nombreMesAnterior.push(datos[index].pagoMayo);
          break;
          case 7:
            this.nombreMesActual.push(datos[index].pagoJulio);
            this.nombreMesAnterior.push(datos[index].pagoJunio);
          break;
          case 8: 
            this.nombreMesActual.push(datos[index].pagoAgosto);
            this.nombreMesAnterior.push(datos[index].pagoJulio);
          break;
          case 9:
            this.nombreMesActual.push(datos[index].pagoSeptiembre);
            this.nombreMesAnterior.push(datos[index].pagoAgosto);
          break;
          case 10:
            this.nombreMesActual.push(datos[index].pagoOctubre);
            this.nombreMesAnterior.push(datos[index].pagoSeptiembre);
          break;
          case 11: 
            this.nombreMesActual.push(datos[index].pagoNoviembre);
            this.nombreMesAnterior.push(datos[index].pagoOctubre);
          break;
          case 12: 
            this.nombreMesActual.push(datos[index].pagoDiciembre);
            this.nombreMesAnterior.push(datos[index].pagoNoviembre);
          break;
        }
        
        this.fechaNueva[index] = datos[index].fecha.slice(0, 2)+'-'+datos[index].fecha.slice(2, 4)+"-"+datos[index].fecha.slice(4, 6)
        let resultadoDiferencia = diaNumerico - this.fechaDiaActualNumerica;

        if(resultadoDiferencia < 0  && this.nombreMesActual[index] != "P" && this.nombreMesActual[index] != "p") {
          let mensaje = index+1+"_("+datos[index].identificador+"). "+datos[index].descripcion+" --> "+this.fechaNueva[index];
          this.btnWhatsapp.push(true);
          this.celularPagoAnterior.push(datos[index].cel);
          this.mensajePagoAnteriores.push(mensaje);
        }
        else
        if(resultadoDiferencia == 0 && this.nombreMesActual[index] != "P" && this.nombreMesActual[index] != "p") {
          let mensaje = index+1+"_("+datos[index].identificador+"). "+datos[index].descripcion+" --> "+this.fechaNueva[index];
          this.btnWhatsapp.push(true);
          this.celularPagoActual.push(datos[index].cel);
          this.mensajePagoActual.push(mensaje);
        }else
        if((this.nombreMesAnterior[index] != "P" && this.nombreMesAnterior[index] != "p")){
          let mensaje = index+1+"_("+datos[index].identificador+"). "+datos[index].descripcion+" --> "+this.fechaNueva[index];          
          this.btnWhatsapp.push(true);
          this.celularPagoAnterior.push(datos[index].cel);
          this.mensajePagoAnteriores.push(mensaje);
        }else{
          this.btnWhatsapp.push(false);
        }
      }
      this.mostrarDato = true;
      
    }

    reiniciarCalculoDias(){
      this.mensajePagoActual = [];
      this.mensajePagoFuturo = [];
      this.mensajePagoAnteriores = [];

      this.nombreMesActual = [];
      this.nombreMesAnterior = [];
    }

  }