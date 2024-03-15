import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {Todo} from "../interfaces/todo";
import {TodoService} from "../services/todo.service";

@Component({
  selector: 'app-create-todo',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './create-todo.component.html',
  styleUrl: './create-todo.component.css'
})
export class CreateTodoComponent {
  todo: Todo = {
    title: '',
    done: false
  };

  constructor(private todoService: TodoService) {
  }

  onSubmit() {
    this.todoService.addTodo(this.todo)
  }
}
