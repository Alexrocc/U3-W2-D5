import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/modules/todo';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  taskList!: Todo[];

  constructor(private todosSrv: TodosService) {}

  ngOnInit(): void {
    const list = this.todosSrv.getTaskList();
    this.taskList = list;
  }
  addNewTask() {
    this.todosSrv.addTask();
    let input = document.getElementById('taskInput') as HTMLInputElement;
    input.value = '';
  }
}
