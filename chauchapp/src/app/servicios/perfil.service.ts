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
  displayN:string;
  constructor( private ab: AngularFirestore, public afDB: AngularFireDatabase) { }
  perfiles = [];
  notes = [
  ];
  
  getPerfil() {
    return this.ab.collection('Datos').snapshotChanges();
  }

  public getProfile() {
   // return this.afDB.list('Empleados/');
    return this.afDB.list('Usuarios/').snapshotChanges().pipe(map(info => {
       info.map(a => {
        const data: perfiles = a.payload.toJSON() as perfiles;
        if(data.id=='D9rJaNrAQ4R8bNqyyOty8cYlB143')
        {
          console.log(data.displayName);
          this.displayN=data.displayName;
        }
        return data;
      })
    }));
  }

  public getNotes() {
    //return this.notes;z
    return this.afDB.list('Empleados/').snapshotChanges();
  }

  public getNote(id) {
    // tslint:disable-next-line: only-arrow-functions
    return this.notes.filter( function(e, i ) {
      return e.id == id }
     )[0] || {id: null, title: null, description: null};
  }
}
