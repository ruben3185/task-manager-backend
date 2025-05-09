 
const Task = require('../models/taskModel');


// Crear tarea
exports.createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const task = await Task.create({ title, description, user_id: req.user.id });
    res.status(201).json({ message: 'Tarea creada', task });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear tarea', details: error.message });
  }
};

// Listar tareas del usuario
exports.listTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll({ where: { user_id: req.user.id } });
    res.json({ tasks });
  } catch (error) {
    res.status(500).json({ error: 'Error al listar tareas', details: error.message });
  }
};

// Editar tarea
exports.editTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    const { title, description, status } = req.body;

    const task = await Task.findByPk(taskId);
    task.title = title || task.title;
    task.description = description || task.description;
    task.status = status || task.status;
    await task.save();
    
    res.json({ message: 'Tarea actualizada', task });
  } catch (error) {
    res.status(500).json({ error: 'Error al editar tarea', details: error.message });
  }
};

// Eliminar tarea
exports.deleteTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    const task = await Task.findOne({ where: { id: taskId, user_id: req.user.id } });

    await task.destroy();
    res.json({ message: 'Tarea eliminada' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar tarea', details: error.message });
  }
};
