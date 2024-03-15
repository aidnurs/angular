import {Injectable} from '@angular/core';
import {Todo} from "../interfaces/todo";
import {catchError, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private url: string = 'api/todos';

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url);
  }

  updateTodo(todo: Todo): Observable<any> {
    return this.http.put(this.url, todo);
  }

  addTodo(todo: Todo): void {
    this.http.post<Todo>(this.url, todo).pipe(
      catchError(err => {
          console.error(err)
          throw err
        }
      )
    ).subscribe(() => {
      console.log('Todo added')
      this.getTodos()
    })
  }

  deleteTodo(todoId: number): Observable<Todo> {
    const url = `${this.url}/${todoId}`;

    return this.http.delete<Todo>(url);
  }

  constructor(
    private http: HttpClient,
  ) {
  }
}
