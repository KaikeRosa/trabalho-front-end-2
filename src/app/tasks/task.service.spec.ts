import { TestBed } from '@angular/core/testing';
import { TaskService } from './task.service';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskService);
    service.clearAll(); // Limpa tarefas antes de cada teste
  });

  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('deve adicionar uma tarefa', () => {
    service.addTask('Nova tarefa');
    expect(service.getTasks().length).toBe(1);
    expect(service.getTasks()[0].title).toBe('Nova tarefa');
  });

  it('deve deletar uma tarefa e adicioná-la ao histórico', () => {
    service.addTask('Tarefa para deletar');
    const task = service.getTasks()[0];
    service.deleteTask(task);
    expect(service.getTasks().length).toBe(0);
    expect(service.getDeletedTasks().length).toBe(1);
    expect(service.getDeletedTasks()[0].title).toBe('Tarefa para deletar');
  });

  it('deve retornar tarefas deletadas', () => {
    service.addTask('Tarefa');
    const task = service.getTasks()[0];
    service.deleteTask(task);
    const deleted = service.getDeletedTasks();
    expect(deleted.length).toBe(1);
  });
});

