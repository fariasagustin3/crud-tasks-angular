import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/models/Task';
import { TaskService } from 'src/app/services/task.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  task?: Task;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService,
  ) {  }

  ngOnInit(): void {
    const taskId = this.route?.snapshot?.paramMap?.get("id");
    if (taskId) {
      this.taskService.getTaskById(taskId).pipe(
        catchError(error => {
          console.error('Error fetching task', error);
          return of(null);
        })
      ).subscribe(task => {
        if (task) {
          this.task = task;
        } else {
          // Handle the case where the task is not found or an error occurred
          this.router.navigate(['/']);
        }
      });
    } else {
      // Handle the case where taskId is null
      this.router.navigate(['/']);
    }
  }

  onSubmit(): void {
    if (this.task) {
      this.taskService.updateTask(this.task).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }

}
