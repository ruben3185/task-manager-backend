const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');  // Importa el paquete cors
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const sequelize = require('./config/db');

dotenv.config();

const app = express();

// Habilitar CORS con configuraciones específicas
app.use(cors({
  origin: 'http://localhost:5432',  // Permite peticiones solo desde este origen
  credentials: true                // Si utilizas cookies o autenticación basada en credenciales
}));

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api', taskRoutes);

// Sincronizar la base de datos
sequelize.sync().then(() => {
  console.log('Base de datos sincronizada');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
