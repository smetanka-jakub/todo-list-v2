import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';

const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  log: any;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  // public getAllTodoLists(){
  //   this.http.get(API_URL + '/todolist').map( response => {
  //     const todolists = response.json;
  //     return todoLists.map(t => new TodoList(t))
  //   });
  // }
 
  ////////////////////////////////////////////TODO LIST ///////////////////////////////////////////////////
  // GET -all todolists from mockapi.io
  // GET /todolist
  public getAllTodoLists(): Observable<TodoList[]> {
    return this.http.get<TodoList[]>(API_URL + 'todolist')
         .pipe(catchError(this.handleError<TodoList[]>('getAllTodoLists', [])));
  }

  // POST
  // /todolist
  public addTodoList(todoList: TodoList): Observable<TodoList> {
    return this.http.post<TodoList>(API_URL + 'todolist', todoList, this.httpOptions)
      .pipe(
        catchError(this.handleError('addHero', todoList))
      );
  }

  // GET
  // /todolist/:id

  // PUT
  // /todolist/:id

  // DELETE
  // /todolist/:id
//////////////////////////////////////// TODOLIST ITEM ////////////////////////////////////////////////////////////
  // POST
  // /todolist/:id/item
  public addItemToList(todoListId: number, todoItem: TodoItem): Observable<TodoItem>{
    return this.http.post<TodoItem>(API_URL + 'todolist/' + todoListId + '/item', todoItem, this.httpOptions)
      .pipe(
        catchError(this.handleError('addItem', todoItem))
      );
  }

  //  GET
  // /todolist/:id/item

  // GET
  // /todolist/:id/item/:id

  // PUT
  // /todolist/:id/item/:id
  public updateItem(todoListId: number, todoItem: TodoItem): Observable<TodoItem>{
    return this.http.post<TodoItem>(API_URL + 'todolist/' + todoListId + '/item/' + todoItem.id, todoItem, this.httpOptions)
      .pipe(
        catchError(this.handleError('addItem', todoItem))
      );
  }
  // DELETE
  // /todolist/:id/item/:id
  public deleteItem(todoListId: number, todoItemId: number): Observable<unknown>{
    return this.http.delete(API_URL + 'todolist/' + todoListId + '/item/' + todoItemId, this.httpOptions)
      .pipe(
        catchError(this.handleError('deleteItem', todoItemId))
      );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
