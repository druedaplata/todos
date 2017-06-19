import { Todo } from './todo';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodoDataService {
  // Placeholder for last id so we can simulate
  // automatic incrementing for id's
  lastId: number = 0;

  // Placeholder for todo's
  todos: Todo[] = [];

  constructor(
    private api: ApiService
  ) {
  }

  // Simulate POST /todos
  addTodo(todo: Todo): Observable<Todo> {
    return this.api.createTodo(todo);
  }

  // Simulate DELETE /todos/:id
  deleteTodoById(id: number): Observable<Todo> {
    return this.api.deleteTodoById(id);
  }

  // Simulate PUT /todos/:id
  updateTodo(todo: Todo): Observable<Todo> {
    return this.api.updateTodo(todo);
  }

  // Simulate GET /todos
  getAllTodos(): Observable<Todo[]> {
    return this.api.getAllTodos();
  }

  // Simulate GET /todos/:id
  getTodoById(id: number): Observable<Todo> {
    return this.api.getTodoById(id);
  }

  // Toggle todo complete
  toggleTodoComplete(todo: Todo){
    todo.complete = !todo.complete;
    return this.api.updateTodo(todo);
  }

}
