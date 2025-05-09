 
const Task = require('../models/taskModel');

// Gate para saber si un usuario puede modificar/eliminar una tarea
async function canModifyTask(user, taskId) {
  const task = await Task.findOne({ where: { id: taskId } });
  if (!task) return false;
  return task.user_id === user.id;
}

module.exports = { canModifyTask };
