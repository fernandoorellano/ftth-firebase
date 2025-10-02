import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login = false;
  usuario =  environment.auth.usuario;
  contraseña = environment.auth.contraseña;

  constructor() { }
}
