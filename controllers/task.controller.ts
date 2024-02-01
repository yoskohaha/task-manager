import express, { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Task } from '../entities/task.entity';
import { Router } from 'express';


const router = express.Router();

router.get('/', async (_req: Request, res: Response) => {
  const taskRepository = getRepository(Task);
  const tasks = await taskRepository.find();
  res.json(tasks);
});

router.post('/', async (req: Request, res: Response) => {
  const taskRepository = getRepository(Task);
  const newTask = taskRepository.create(req.body);
  const savedTask = await taskRepository.save(newTask);
  res.status(201).json(savedTask);
});

export default router;
