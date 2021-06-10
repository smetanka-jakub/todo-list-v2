import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';

import { Router } from '@angular/router';

@Component({
  selector: 'todolist-item',
  templateUrl: './todolist-item.component.html',
  styleUrls: ['./todolist-item.component.css']
})
export class TodolistItemComponent implements OnInit {
  @Input() todoItem!: TodoItem;
  @Input() todoList!: TodoList;

  constructor( private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  deleteItem(todoListId: number, todoItemId: number): void {
    console.log('calll delete');
    this.todoList.items = this.todoList.items.filter(h => h.id !== todoItemId);
    this.apiService.deleteItem(todoListId, todoItemId).subscribe();
  }

  toggleDoneStatus(todoListId: number, todoItem: TodoItem){
    todoItem.done = !todoItem.done;
    this.apiService.updateItem(todoListId, todoItem).subscribe();
  }
}
