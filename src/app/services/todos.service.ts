import { Injectable } from '@angular/core';
import { Todo } from '../modules/todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  taskList: Todo[] = [];
  id = 0;
  constructor() {}

  getTaskList() {
    return this.taskList;
  }

  addTask() {
    const taskInput = document.getElementById('taskInput') as HTMLInputElement;
    let taskInputValue = taskInput.value;

    const newTask: Todo = {
      id: this.id + 1,
      title: taskInputValue,
      completed: false,
    };
    this.id++;
    this.taskList.push(newTask);
    console.log(this.taskList);
  }
}
