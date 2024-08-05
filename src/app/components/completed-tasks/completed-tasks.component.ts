import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.css']
})
export class CompletedTasksComponent {
  completedTasks: Task[] = [];

  constructor(private taskService: TaskService) {
    this.taskService.getCompletedTasks().subscribe(tasks => {
      this.completedTasks = tasks;
    })
  }
}
