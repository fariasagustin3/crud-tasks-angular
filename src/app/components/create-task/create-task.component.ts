import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {
  task = {
    name: "",
    description: "",
    startDate: ""
  };

  constructor(private taskService: TaskService) {  }

  onSubmit() {
    this.taskService.createTask(this.task).subscribe(response => {
      alert("Task saved successfully!")
    })

    setTimeout(() => {
      window.location.href = "http://localhost:4200/"
    }, 2000)
  }
}
