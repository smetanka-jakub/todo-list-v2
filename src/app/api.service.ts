import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { TodoList } from './TodoList';

const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  log: any;

  constructor(private http: HttpClient) { }

  // public getAllTodoLists(){
  //   this.http.get(API_URL + '/todolist').map( response => {
  //     const todolists = response.json;
  //     return todoLists.map(t => new TodoList(t))
  //   });
  // }

  public getAllTodoLists(): Observable<TodoList[]> {
    return this.http.get<TodoList[]>(API_URL + 'todolist');
    //      .pipe(catchError(this.handleError<TodoList[]>('getAllTodoLists', []))
    // );

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
