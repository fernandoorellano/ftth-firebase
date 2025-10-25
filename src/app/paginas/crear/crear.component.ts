import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Abonado } from 'src/app/interfaces/abonado';
import { ListadofireService } from 'src/app/servicios/listadofire.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {


   loginForm= new FormGroup({
      identificador: new FormControl(''),
      descripcion: new FormControl(''),
      cel: new FormControl(''),
      fecha: new FormControl(''),
      pon: new FormControl(''),
      pagoSeptiembre: new FormControl(''),
    });

  constructor(public listadoFireServ : ListadofireService) { }

  ngOnInit(): void {
    this.listadoFireServ.obtenerDatosAbonado();
  }

  onLogin(){
    const nuevoAbonado: Abonado = {
      identificador: this.loginForm.value.identificador,
      descripcion: this.loginForm.value.descripcion,
      fecha: this.loginForm.value.fecha,
      pon: this.loginForm.value.pon,
      cel: this.loginForm.value.cel,
      pagoMayo: "p",
      pagoJunio: "p",
      pagoJulio: "p",
      pagoAgosto: "p",
      pagoSeptiembre: this.loginForm.value.pagoSeptiembre,
      pagoOctubre: "",
      pagoNoviembre: "",
      pagoDiciembre: ""
    }
    this.listadoFireServ.crearAbonado(nuevoAbonado)
    this.loginForm.reset();
  }
}