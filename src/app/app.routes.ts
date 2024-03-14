import {Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ListTodoComponent} from "./list-todo/list-todo.component";
import {DetailTodoComponent} from "./detail-todo/detail-todo.component";
import {NewTodoComponent} from "./new-todo/new-todo.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'todo',
    component: ListTodoComponent
  },
  {
    path: 'todo/:id',
    component: DetailTodoComponent
  },
  {
    path: 'todo/new',
    component: NewTodoComponent
  }
];
