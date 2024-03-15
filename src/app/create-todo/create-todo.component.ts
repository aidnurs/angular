import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {Todo} from "../interfaces/todo";

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
    id: 0,
    title: '',
    done: false
  };

  constructor() {
  }

  onSubmit() {
    console.log('Form submitted', this.todo);
  }
}
