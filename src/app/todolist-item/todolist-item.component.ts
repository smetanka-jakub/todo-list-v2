import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from '../TodoItem';

@Component({
  selector: 'todolist-item',
  templateUrl: './todolist-item.component.html',
  styleUrls: ['./todolist-item.component.css']
})
export class TodolistItemComponent implements OnInit {
  @Input() todoItem!: TodoItem;
  constructor() { }

  ngOnInit(): void {
  }

}
