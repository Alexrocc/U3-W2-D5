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
    setTimeout(() => {
      const list = this.todosSrv.getTaskList();
      this.taskList = list;
      // .filter((task) => task.completed === false);

      console.log(this.taskList);
    }, 2000);
  }
  addNewTask() {
    setTimeout(() => {
      let input = document.getElementById('taskInput') as HTMLInputElement;
      if (input.value !== '') {
        this.todosSrv.addTask();
      }
      input.value = '';
    }, 2000);
  }
  completeTask(id: number, i: number) {
    setTimeout(() => {
      this.todosSrv.checkAsCompleted({ completed: true }, id);
      this.taskList.splice(i, 1);
    }, 2000);
  }
}
