import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { TodoItem } from '../TodoItem';

@Component({
  selector: 'todolist-item',
  templateUrl: './todolist-item.component.html',
  styleUrls: ['./todolist-item.component.css']
})
export class TodolistItemComponent implements OnInit {
  @Input() todoItem!: TodoItem;

  constructor( private apiService: ApiService) { }

  ngOnInit(): void {
  }

  deleteItem(todoListId: number, todoItemId: number): void {
    console.log('calll delete');
    this.apiService.deleteItem(todoListId, todoItemId).subscribe();
  }
}
