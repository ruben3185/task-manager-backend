 
const express = require('express');
const { createTask, listTasks, editTask, deleteTask } = require('../controllers/taskController');
const authMiddleware = require('../middlewares/authMiddleware');
const permissionMiddleware = require('../middlewares/permissionMiddleware');
const router = express.Router();

router.post('/tasks', authMiddleware, createTask);
router.get('/tasks', authMiddleware, listTasks);
router.put('/tasks/:taskId', authMiddleware, permissionMiddleware, editTask);
router.delete('/tasks/:taskId', authMiddleware, permissionMiddleware, deleteTask);

module.exports = router;
