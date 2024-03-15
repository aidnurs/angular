import {Injectable} from '@angular/core';
import {Todo} from "../interfaces/todo";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private url: string = 'api/todos';

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url);
  }

  updateTodo (todo: Todo): Observable<any> {
    return this.http.put(this.url, todo);
  }

  addTodo (todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.url, todo);
  }

  deleteTodo (todoId: number): Observable<Todo> {
    console.log('deleteTodo', todoId);
    const url = `${this.url}/${todoId}`;

    return this.http.delete<Todo>(url);
  }

  constructor(
    private http: HttpClient,
  ) {
  }
}
