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
  await(): Promise<void> {
    return new Promise<void>((res) => {
      setTimeout(() => {
        res();
      }, 2000);
    });
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
  }

  checkAsCompleted(data: Partial<Todo>, id: number) {
    this.taskList = this.taskList.map((task) =>
      task.id === id ? { ...task, ...data } : task
    );
    return this.taskList.find((task) => task.id === id) as Todo;
  }
}
