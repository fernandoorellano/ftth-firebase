import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm= new FormGroup({
      usuario: new FormControl(''),
      contraseña: new FormControl('')
  });

  mensajeLogin = "";

  constructor(private router: Router, private authServ: AuthService) { }

  ngOnInit(): void {}

  onLogin(){
    let usuario = this.loginForm.controls['usuario'].value;
    let contraseña = this.loginForm.controls['contraseña'].value;

    if(usuario == this.authServ.usuario && contraseña == this.authServ.contraseña){
      this.authServ.login = true;
      this.router.navigate(["controlpagos"]);
    }else{
      this.mensajeLogin = "Usuario/contraseña incorrecto."
    }
  }
}
