 
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { JWT_SECRET, JWT_EXPIRE } = require('../config/jwt');

// Registro de usuario
exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;
    
    const user = await User.create({ username, password });
    res.status(201).json({ message: 'Usuario registrado', user });
  } catch (error) {
    res.status(500).json({ error: 'Error en el registro', details: error.message });
  }
};

// Login de usuario
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.status(400).json({ error: 'Correo o contraseña incorrectos' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Correo o contraseña incorrectos' });
    }

    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: JWT_EXPIRE });
    res.json({ message: 'Login exitoso', token });
  } catch (error) {
    res.status(500).json({ error: 'Error en el login', details: error.message });
  }
};
