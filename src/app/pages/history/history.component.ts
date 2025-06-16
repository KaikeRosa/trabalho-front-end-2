import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../../tasks/task.service';
import { Task } from '../../tasks/task.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  deletedTasks: Task[] = [];

  constructor(
    private taskService: TaskService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.deletedTasks = this.taskService.getDeletedTasks();
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}

