 
const { canModifyTask } = require('../services/gateService');

const permissionMiddleware = async (req, res, next) => {
  const { taskId } = req.params;

  const allowed = await canModifyTask(req.user, taskId);
    if (!allowed) {
      return res.status(403).json({error: 'No tienes permiso para esta tarea'});
    }

  next();
};

module.exports = permissionMiddleware;
