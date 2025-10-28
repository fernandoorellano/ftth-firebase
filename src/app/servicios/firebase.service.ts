import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Abonado } from '../interfaces/abonado';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private afs : AngularFirestore) {}

  crearDatos(datos: Abonado){
    datos.id = this.afs.createId();
    return this.afs.collection('/abonados').add(datos);
  }

  obtenerDatos(){
    return this.afs.collection('/abonados', ref => ref.orderBy('fecha', 'asc')).snapshotChanges();
  }

  obtenerDato(){
   return this.afs.collection('/abonados', ref => ref.where('id', '==', "07kTkCMFDU0I1ST0HdYA"))
      .valueChanges() 
  }

  eliminarDatos(abonado: Abonado){
    return this.afs.doc('/abonados/'+abonado.id).delete();
  }

  actualizarDatos(abonado: Abonado) {
    return this.afs.doc('/abonados/'+abonado.id).update(abonado);
  }

}
