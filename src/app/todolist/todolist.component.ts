/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable quotes */
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { MatDialog } from '@angular/material/dialog';
import { TodolistItemDetailComponent } from '../todolist-item-detail/todolist-item-detail.component';
import { TodolistDetailComponent } from '../todolist-detail/todolist-detail.component';
@Component({
  selector: 'todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  searchFilter: unknown = '';
  radio: unknown = '';
  todoLists: TodoList[] = [];
  todoItem: TodoItem = {} as TodoItem;

  constructor(public dialog: MatDialog, private apiService: ApiService) {}

  ngOnInit(): void {
    this.getTodoLists();
  }

  getTodoLists(): void {
    this.apiService.getAllTodoLists().subscribe((todos) => {
      this.todoLists = todos;
    });
  }

  deleteTodoList(todoList: TodoList): void {
    this.todoLists = this.todoLists.filter((h) => h !== todoList);
    this.apiService.deleteTodoList(todoList.id).subscribe();
  }

  filterChange(e: string): void {
    this.radio = e;
  }

  openDialogAddTask(todoList: TodoList): void {
    const dialogRef = this.dialog.open(TodolistItemDetailComponent, {
      width: '500px',
      data: {
        item: this.todoItem,
        flag: 'create',
        id: todoList.id
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        todoList.items.push(result);
      }
    });
  }

  createOrUpdateTodoList(flag: string, todoList?: TodoList): void {
    const dialogRef = this.dialog.open(TodolistDetailComponent, {
      width: '500px',
      data: {
        list: todoList !== undefined ? todoList : ({} as TodoList),
        flag: flag
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        this.todoLists.push(result);
      }
    });
  }
}
