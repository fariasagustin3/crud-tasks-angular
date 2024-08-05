import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = "http://localhost:8080/tasks"

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}/list`);
  }

  createTask(task: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, task);
  }

  getCompletedTasks(): Observable<any> {
    return this.http.get(`${this.apiUrl}/completed`);
  }

  getTaskById(id: string): Observable<Task> {
    return this.http.get<Task>(`${this.apiUrl}/${id}/task`);
  }

  updateTask(task: Task): Observable<Task> {
    const { id, ...taskWithoutId } = task;
    return this.http.put<Task>(`${this.apiUrl}/${id}/edit`, taskWithoutId);
  }

  deleteTask(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}/delete`);
  }
}
