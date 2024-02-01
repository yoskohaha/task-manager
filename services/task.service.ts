import { getRepository } from 'typeorm';
import { Task } from '../entities/task.entity';

class TaskService {
  private taskRepository = getRepository(Task);

  async getAllTasks(): Promise<Task[]> {
    return await this.taskRepository.find();
  }

  async createTask(taskData: Partial<Task>): Promise<Task> {
    const newTask = this.taskRepository.create(taskData);
    return await this.taskRepository.save(newTask);
  }
}

export default new TaskService();
