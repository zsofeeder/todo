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

  todos: Todo[];

  // [
  //  new Todo(1, 'asd', false, new Date()),
  // ];

  constructor(
    private service: TodoDataService
  ) {
  }

  ngOnInit() {
    this.service.retrieveAllTodos('asd').subscribe(
      response => this.todos = response);
  }

}
