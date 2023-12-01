import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/modules/todo';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss'],
})
export class CompletedComponent implements OnInit {
  taskList!: Todo[];
  constructor(private todosSrv: TodosService) {}

  async ngOnInit() {
    await this.todosSrv.await();
    const list = this.todosSrv.getTaskList();
    this.taskList = list;
  }
}
