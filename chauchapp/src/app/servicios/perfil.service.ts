import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { identifierName } from '@angular/compiler';

export interface perfiles {
  id: string;
  email: string;
  displayName: string;
  photoURL: string;
}

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor( private ab: AngularFirestore, public afDB: AngularFireDatabase) { }
  perfiles = [];
  notes = [
    { id: 'a', title: 'Nota1', description: 'Descripcion1'},
     { id: 'b', title: 'Nota2', description: 'Descripcion2'},
     { id: 'c', title: 'Nota3', description: 'Descripcion3'}
  ];
  /*
  getPerfil() {
    return this.ab.collection('Datos').snapshotChanges();
  }

  public getProfile() {
   // return this.afDB.list('Empleados/');
    return this.afDB.list('Usuarios/').snapshotChanges().pipe(map(info => {
      return info.map(a => {
        const data: perfiles = a.payload.toJSON() as perfiles;
        data.id = a.payload.toJSON().toString();
        return data;
      })
    }));
  }*/

  public getNotes() {
    return this.notes;
  }

  public getNote(id) {
    // tslint:disable-next-line: only-arrow-functions
    return this.notes.filter( function(e, i ) {
      return e.id == id }
     )[0] || {id: null, title: null, description: null};
  }
}
