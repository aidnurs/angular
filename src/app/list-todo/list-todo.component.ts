import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";
import {DetailTodoComponent} from "../detail-todo/detail-todo.component";
import {Todo} from "../interfaces/todo";
import {TodoService} from "../services/todo.service";
import {MessagesComponent} from "../messages/messages.component";
import {CreateTodoComponent} from "../create-todo/create-todo.component";

@Component({
  selector: 'app-list-todo',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    DetailTodoComponent,
    MessagesComponent,
    CreateTodoComponent
  ],
  templateUrl: './list-todo.component.html',
  styleUrl: './list-todo.component.css'
})
export class ListTodoComponent {
  todos: Todo[] = [];

  constructor(private todoService: TodoService,
  ) {
  }

  getTodos(): void {
    this.todoService.getTodos().subscribe(todos => this.todos = todos)
  }

  ngOnInit() {
    this.getTodos();
  }

  onDeleteTodo($event: number) {
    this.todoService.deleteTodo($event).subscribe(() => this.getTodos());
  }
}
