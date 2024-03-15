import {Injectable} from '@angular/core';
import {Todo} from "../interfaces/todo";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const todos: Todo[] = [
      {id: 1, title: 'Learn Angular', done: false},
      {id: 2, title: 'Learn React', done: false},
      {id: 3, title: 'Learn Vue', done: false},
      {id: 4, title: 'Learn Node', done: false},
      {id: 5, title: 'Learn Express', done: false},
      {id: 6, title: 'Learn MongoDB', done: false},
      {id: 7, title: 'Learn MySQL', done: false},
      {id: 8, title: 'Learn PostgreSQL', done: false},
      {id: 9, title: 'Learn TypeScript', done: false},
      {id: 10, title: 'Learn JavaScript', done: false},
    ];
    return {todos};
  }

  genId(todos: Todo[]): number {
    return todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 0;
  }

  constructor() {
  }
}
