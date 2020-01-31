import { Component , OnInit} from '@angular/core';
import { TaskI } from '../models/task.interface';
import { TodoService } from '../services/todo.service';
import { AuthService } from '../servicios/auth.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  todos: TaskI[];
  cod:string;
  constructor(private todoService: TodoService, private au:AuthService) {
    
  }
  ngOnInit() {
this.todoService.getTodos().subscribe(res => {
  this.todos = res;
  this.cod=this.au.userId;
});
  }
}
