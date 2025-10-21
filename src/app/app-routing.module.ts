import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './paginas/crear/crear.component';
import { EdicionComponent } from './paginas/edicion/edicion.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ListadoComponent } from './paginas/listado/listado.component';
import { VerificarGuard } from './guard/verificar.guard';
import { LoginComponent } from './paginas/login/login.component';
import { ControlpagoComponent } from './paginas/controlpago/controlpago.component';

const routes: Routes = [
    {path: "",  redirectTo: "inicio", pathMatch: "full"},
    {path: "inicio", component: InicioComponent},
    {path: "listado", component: ListadoComponent},
    {path: "edicion", canActivate: [VerificarGuard], component: EdicionComponent},
    {path: "crear", component: CrearComponent},
    {path: "login", component: LoginComponent},
    {path: "controlpagos", component: ControlpagoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
