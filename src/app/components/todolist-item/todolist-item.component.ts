import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../core/services/api/api.service';
import { TodoItem } from '../../shared/models/TodoItem';
import { TodoList } from '../../shared/models/TodoList';

import { MatDialog } from '@angular/material/dialog';
import { TodolistItemDetailComponent } from '../todolist-item-detail/todolist-item-detail.component';

@Component({
    selector: 'todolist-item',
    templateUrl: './todolist-item.component.html',
    styleUrls: ['./todolist-item.component.css'],
})
export class TodolistItemComponent implements OnInit {
    @Input() todoItem!: TodoItem;
    @Input() todoList!: TodoList;

    constructor(public dialog: MatDialog, private apiService: ApiService) {}

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    ngOnInit(): void {}

    deleteItem(todoListId: number, todoItemId: number): void {
        this.todoList.items = this.todoList.items.filter(
            (h) => h.id !== todoItemId
        );
        this.apiService.deleteItem(todoListId, todoItemId).subscribe();
    }

    toggleDoneStatus(todoListId: number, todoItem: TodoItem): void {
        todoItem.done = !todoItem.done;
        this.apiService.updateItem(todoListId, todoItem).subscribe();
    }

    openDialogEditTask(): void {
        const dialogRef = this.dialog.open(TodolistItemDetailComponent, {
            width: '500px',
            data: {
                item: this.todoItem,
                flag: 'update',
            },
        });

        dialogRef.afterClosed().subscribe((result) => {
            this.todoItem = result;
        });
    }
}
