import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {DetailTodoComponent} from "../detail-todo/detail-todo.component";
import {Todo} from "../todo";
import {DetailService} from "../services/detail.service";
import {MessagesComponent} from "../messages/messages.component";

@Component({
  selector: 'app-list-todo',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    DetailTodoComponent,
    MessagesComponent
  ],
  templateUrl: './list-todo.component.html',
  styleUrl: './list-todo.component.css'
})
export class ListTodoComponent {
  title = 'List Todo';
  todos: Todo[] = [];

  constructor(private todoService: DetailService,
  ) {
  }

  getTodos(): void {
    this.todoService.getTodo().subscribe(todos => this.todos = todos)
  }

  ngOnInit() {
    this.getTodos();
  }
}
