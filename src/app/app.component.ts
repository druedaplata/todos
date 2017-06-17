import { Todo } from './todo';
import { TodoDataService } from './todo-data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})

export class AppComponent {

  newTodo: Todo = new Todo();

  // Ask Angular DI system to inject the dependency
  // associated with the dependency injection token 'TodoDataService'
  // and assign it to a property called 'todoDataService'
  constructor(private todoDataService: TodoDataService) {

  }

  // Add new method to handle event emitted by TodoListHeaderComponent
  onAddTodo(todo: Todo) {
    this.todoDataService.addTodo(todo);
  }

  // Service is now available as this.todoDataService
  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }

}