import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import {HttpClientModule} from '@angular/common/http';


import { ListadofirebaseComponent } from './componentes/listadofirebase/listadofirebase.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { CrearComponent } from './paginas/crear/crear.component';
import { EdicionComponent } from './paginas/edicion/edicion.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ListadoComponent } from './paginas/listado/listado.component';
import { ListadoFaltantesComponent } from './componentes/listado-faltantes/listado-faltantes.component';
import { ListadoActualesComponent } from './componentes/listado-actuales/listado-actuales.component';
import { ListadoFuturosComponent } from './componentes/listado-futuros/listado-futuros.component';
import { LoginComponent } from './paginas/login/login.component';

@NgModule({
  declarations: [
      AppComponent,
    ListadofirebaseComponent,
    NavbarComponent,
    CrearComponent,
    EdicionComponent,
    InicioComponent,
    ListadoComponent,
    ListadoFaltantesComponent,
    ListadoActualesComponent,
    ListadoFuturosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
