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

  async ngOnInit() {
    await this.todosSrv.await();
    const list = this.todosSrv.getTaskList();
    this.taskList = list;
  }
  async addNewTask() {
    await this.todosSrv.await();
    let input = document.getElementById('taskInput') as HTMLInputElement;
    if (input.value !== '') {
      this.todosSrv.addTask();
    }
    input.value = '';
  }
  async completeTask(id: number, i: number) {
    await this.todosSrv.await();
    this.todosSrv.checkAsCompleted({ completed: true }, id);
    this.taskList.splice(i, 1);
  }
}
