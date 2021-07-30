import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../api.service';
import { TodoList } from '../TodoList';

@Component({
    selector: 'app-todolist-detail',
    templateUrl: './todolist-detail.component.html',
    styleUrls: ['./todolist-detail.component.css'],
})
export class TodolistDetailComponent implements OnInit {
    constructor(
        public dialogRef: MatDialogRef<TodolistDetailComponent>,
        @Inject(MAT_DIALOG_DATA)
        public data: {
            list: TodoList;
            flag: string;
        },
        private apiService: ApiService
    ) {}
    onNoClick(): void {
        this.dialogRef.close();
    }
    save(todo: TodoList, flag: string): void {
        if (flag === 'create') {
            this.apiService.addTodoList(todo).subscribe((todo) => {
                // todoList.items.push(todoItem);
                this.dialogRef.close(todo);
            });
        } else {
            this.apiService.updateTodoList(todo).subscribe(() => {
                this.dialogRef.close();
            });
        }
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    ngOnInit(): void {}
}
