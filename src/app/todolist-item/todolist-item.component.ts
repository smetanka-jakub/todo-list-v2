import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TodolistItemDetailComponent } from '../todolist-item-detail/todolist-item-detail.component';

@Component({
  selector: 'todolist-item',
  templateUrl: './todolist-item.component.html',
  styleUrls: ['./todolist-item.component.css']
})
export class TodolistItemComponent implements OnInit {
  @Input() todoItem!: TodoItem;
  @Input() todoList!: TodoList;

  constructor( public dialog: MatDialog, private apiService: ApiService) { }

  ngOnInit(): void {
  }

  deleteItem(todoListId: number, todoItemId: number): void {
    this.todoList.items = this.todoList.items.filter(h => h.id !== todoItemId);
    this.apiService.deleteItem(todoListId, todoItemId).subscribe();
  }

  toggleDoneStatus(todoListId: number, todoItem: TodoItem){
    todoItem.done = !todoItem.done;
    this.apiService.updateItem(todoListId, todoItem).subscribe();
  }

  openDialogEditTask(): void {
    const dialogRef = this.dialog.open(TodolistItemDetailComponent, {
      width: '500px',
      data: {
        item: this.todoItem,
        flag: 'update'
      }
    });

    dialogRef.afterClosed().subscribe(result => {

      this.todoItem = result;
    });
  }
}
