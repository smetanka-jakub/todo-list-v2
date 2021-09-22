import { TestBed, getTestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { ApiService } from './api.service';
import { TodoList } from '../../models/TodoList';

describe('ApiService', () => {
  let injector: TestBed;
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });

    injector = getTestBed();
    service = injector.get(ApiService);
    httpMock = injector.get(HttpTestingController);
  });

  const todoList: TodoList = {
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
  };
  const todolistResponse: TodoList[] = [todoList];

  it('getAllTodoList() should return data', () => {
    service.getAllTodoLists().subscribe((res) => {
      expect(res).toEqual(todolistResponse);
    });

    const req = httpMock.expectOne(
      'https://60b549eefe923b0017c83df4.mockapi.io/api/v1/todolist'
    );
    expect(req.request.method).toBe('GET');
    req.flush(todolistResponse);
  });
  afterEach(() => {
    httpMock.verify();
  });
});
