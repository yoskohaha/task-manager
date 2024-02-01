import { Router } from 'express';
import taskController from './controllers/task.controller';

const router = Router();

// Task routes
router.use('/tasks', taskController);

export default router;