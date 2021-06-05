import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { TodoList } from '../TodoList';

@Component({
  selector: 'todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  
  todoLists: TodoList[] = [];
  constructor( private apiService: ApiService ) { }

  ngOnInit(): void {
    this.getTodoLists();
  }

  getTodoLists(): void {
    this.apiService.getAllTodoLists().subscribe(todos => {
      this.todoLists = todos;
      console.log('this todoList %o', this.todoLists);
    });
    console.log(this.todoLists);
  }
}
