import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import {TaskI} from '../models/task.interface';
import { AuthService } from '../servicios/auth.service';
 
export interface perfiles {
  id: string;
  email: string;
  displayName: string;
  photoURL: string;
}

@Injectable({
  providedIn: 'root'
})

export class TodoService {
private todoCollection: AngularFirestoreCollection<TaskI>;
private todos: Observable<TaskI[]>;
  constructor(db: AngularFirestore) { 
    this.todoCollection = db.collection<TaskI>('service');
    this.todos = this.todoCollection.snapshotChanges().pipe(map( actions =>{
      return actions.map(a=> {
      const data = a.payload.doc.data();
        const id =a.payload.doc.id;
        return {id, ...data};
      });
    }
      ));
  }

  getTodos(){
    return this.todos;
  }

  getTodo(id:  string){
    return this.todoCollection.doc<TaskI>(id).valueChanges();
  }

  updateTodo(todo: TaskI, id: string){
    return this.todoCollection.doc(id).update(todo);
  }
  addTodo(todo: TaskI){
    return this.todoCollection.add(todo);
  }

  removeTodo(id: string){
    return this.todoCollection.doc(id).delete();
  }
}
