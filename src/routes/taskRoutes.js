import { param } from 'express-validator';
import { checkValidationResults } from '../middleware/handleValidationErrors.js';
import express from 'express';
import * as taskController from '../controllers/taskController.js';
import { validateTask } from '../middleware/validateTask.js';

const router = express.Router();

router.get('/', taskController.getTasks);
router.get('/:id', param('id').isInt().withMessage('ID must be a number'), checkValidationResults, taskController.getTaskById);
router.post('/', validateTask, taskController.createTask);

export default router;
