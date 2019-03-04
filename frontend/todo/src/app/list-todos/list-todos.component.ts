import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.scss']
})
export class ListTodosComponent implements OnInit {

  todos = [
    {id: 1, description: 'asd'},
    {id: 2, description: 'asdf'},
    {id: 3, description: 'asdfg'}
  ];
  constructor() {
  }

  ngOnInit() {
  }

}
