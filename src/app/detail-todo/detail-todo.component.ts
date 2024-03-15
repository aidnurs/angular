import {Component, Input} from '@angular/core';
import {Todo} from "../todo";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-detail-todo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './detail-todo.component.html',
  styleUrl: './detail-todo.component.css'
})
export class DetailTodoComponent {
  @Input() todo?: Todo;

  constructor() {
  }
}
