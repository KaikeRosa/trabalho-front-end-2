import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];
  private deletedTasks: Task[] = [];
  private nextId = 1;

  constructor() {}

  getTasks(): Task[] {
    return this.tasks;
  }

  getDeletedTasks(): Task[] {
    return this.deletedTasks;
  }

  addTask(title: string): void {
    const newTask: Task = {
      id: this.nextId++,
      title,
      completed: false
    };
    this.tasks.push(newTask);
  }

  toggleTask(id: number): void {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = !task.completed;
    }
  }

  removeTask(id: number): void {
    const taskIndex = this.tasks.findIndex(t => t.id === id);
    if (taskIndex > -1) {
      const [removed] = this.tasks.splice(taskIndex, 1);
      this.deletedTasks.push(removed);
    }
  }

  clearAll(): void {
    this.tasks = [];
    this.deletedTasks = [];
  }
}

