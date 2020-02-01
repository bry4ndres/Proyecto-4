import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import {ServiciosI } from '../models/infoServicio.interface';
@Injectable({
  providedIn: 'root'
})
export class InfoServicioService {
  private servicioCollection: AngularFirestoreCollection<ServiciosI>;
  private servicios: Observable<ServiciosI[]>;
  constructor(db: AngularFirestore) {
    this.servicioCollection = db.collection<ServiciosI>('service');
    this.servicios = this.servicioCollection.snapshotChanges().pipe(map( actions =>{
      return actions.map(a=> {
      const data = a.payload.doc.data();
        const id =a.payload.doc.id;
        return {id, ...data};
      });
    }
      ));
   }

  getServicios(){
    return this.servicios;
  }

  getServicio(id:  string){
    return this.servicioCollection.doc<ServiciosI>(id).valueChanges();
  }

  updateServicio(servicio: ServiciosI, id: string){
    return this.servicioCollection.doc(id).update(servicio);
  }
  addTodo(servicio: ServiciosI){
    return this.servicioCollection.add(servicio);
  }

  removeTodo(id: string){
    return this.servicioCollection.doc(id).delete();
  }
}
