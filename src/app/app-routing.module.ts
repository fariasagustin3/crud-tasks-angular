import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { CompletedTasksComponent } from './components/completed-tasks/completed-tasks.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';

const routes: Routes = [
  { path: "", component: WelcomeComponent },
  { path: "create-task", component: CreateTaskComponent },
  { path: "completed-tasks", component: CompletedTasksComponent },
  { path: 'edit-task/:id', component: EditTaskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
