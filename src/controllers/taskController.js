import * as taskService from '../services/taskService.js';

export async function getTasks(req, res, next) {
  const tasks = await taskService.getAllTasks();
  res.json(tasks);
}

export async function getTaskById(req, res, next) {
  const id = parseInt(req.params.id);
  const task = await taskService.getTaskById(id);

  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  
  res.json(task);
}

export async function createTask(req, res, next) {
  const { title, completed } = req.body;
  const task = await taskService.createTask({ title, completed });
  res.status(201).json(task);
}
