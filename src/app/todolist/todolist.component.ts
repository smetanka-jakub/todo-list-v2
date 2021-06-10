import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TodolistItemDetailComponent } from '../todolist-item-detail/todolist-item-detail.component';
@Component({
  selector: 'todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  
  todoLists: TodoList[] = [];
  todoItem: TodoItem = {} as TodoItem;
  filtered: TodoItem[] = [];
  filter = {
    done: false,
    active: false
  };
  constructor( public dialog: MatDialog, private apiService: ApiService ) { }

  ngOnInit(): void {
    this.getTodoLists();
  }

  getTodoLists(): void {
    this.apiService.getAllTodoLists().subscribe(todos => {
      this.todoLists = todos;
      console.log('this todoList %o', this.todoLists);
    });
    console.log(this.todoLists);
  };

  createNewTodoList(): void {
    this.apiService.addTodoList({} as TodoList).subscribe( todoList => {
      this.todoLists.push(todoList);
    });
  };

  deleteTodoList( todoList: TodoList ): void {
    this.todoLists = this.todoLists.filter(h => h !== todoList);
    this.apiService.deleteTodoList(todoList.id).subscribe();
  }

  // addItem(todoList: TodoList): void {
  //   this.apiService.addItemToList({} as TodoItem).subscribe( todoItem =>{
  //     todoList.items.push(todoItem);
  //   });
  // }

  openDialog(todoList: TodoList): void {
    const dialogRef = this.dialog.open(TodolistItemDetailComponent, {
      width: '500px',
      data: {
        item: this.todoItem,
        flag: 'create',
        id: todoList.id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result !== undefined){
        todoList.items.push(result);
      }
    });
  }
  // filterChange(todoList: TodoList){
  //   this.filtered = todoList.items.filter(i => 
  //     (i.done === true && this.filter.done === true)
  //     || ((i.done === false || i.done === true) && (this.filter.done === false))
  //     || (i.done === true && this.filter.done === false)
  //  );
  //  console.log('filtered %o', this.filtered);
  // }
}
