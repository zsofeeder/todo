import {Component, OnInit} from '@angular/core';
import {TodoDataService} from '../service/data/todo-data.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public targetDate: Date,
    public isDone: boolean
  ) {
  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.scss']
})
export class ListTodosComponent implements OnInit {

  message: string;

  todos: Todo[];

  // [
  //  new Todo(1, 'asd', false, new Date()),
  // ];

  constructor(
    private service: TodoDataService
  ) {
  }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos() {
    this.service.retrieveAllTodos('zsofeeder').subscribe(
      response => this.todos = response);
  }

  deleteTodo(id) {
    this.service.deleteTodo('zsofeeder', id).subscribe(
      response => {
        this.message = 'Delete successful!';
        this.refreshTodos();
      }
    );
  }
}
