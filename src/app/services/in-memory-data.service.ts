import { Injectable } from '@angular/core';
import {Todo} from "../todo";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const todos:Todo[] = [
      { id: 1, title: 'Learn Angular', description: 'Learn Angular', done: false },
      { id: 2, title: 'Learn React', description: 'Learn React', done: false },
      { id: 3, title: 'Learn Vue', description: 'Learn Vue', done: false },
      { id: 4, title: 'Learn Node', description: 'Learn Node', done: false },
      { id: 5, title: 'Learn Express', description: 'Learn Express', done: false },
      { id: 6, title: 'Learn MongoDB', description: 'Learn MongoDB', done: false },
      { id: 7, title: 'Learn MySQL', description: 'Learn MySQL', done: false },
      { id: 8, title: 'Learn PostgreSQL', description: 'Learn PostgreSQL', done: false },
      { id: 9, title: 'Learn TypeScript', description: 'Learn TypeScript', done: false },
      { id: 10, title: 'Learn JavaScript', description: 'Learn JavaScript', done: false },
    ];
    return {todos};
  }
  constructor() { }
}
