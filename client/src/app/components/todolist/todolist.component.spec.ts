import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';
import { TodoList } from 'src/app/shared/models/TodoList';

import { TodolistComponent } from './todolist.component';

describe('TodolistComponent', () => {
  let component: TodolistComponent;
  let todolists: TodoList[];
  let dialog: MatDialog = {} as MatDialog;
  let mockApiService: any;
  beforeEach(async () => {
    todolists = [
      {
        id: 10,
        title: 'first todolist',
        items: [
          {
            id: 68,
            todolistId: 10,
            title: 'sdad',
            deadline: new Date('2021-06-22T22:00:00.000Z'),
            description: 'asdads',
            done: true
          }
        ],
        query: '',
        radio: ''
      }
    ];
  });

  mockApiService = jasmine.createSpyObj(['getAllTodoLists', 'deleteTodoList']);
  component = new TodolistComponent(dialog, mockApiService);

  describe('delete', () => {
    it('should remove indicated todolist from todolist list', () => {
      mockApiService.deleteTodoList.and.returnValue(of(true));
      component.todoLists = todolists;
      component.deleteTodoList(todolists[0]);

      expect(component.todoLists.length).toBe(0);
    });
  });
});
