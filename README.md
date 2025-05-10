# 📋 Task Manager Backend

Backend API para la gestión de tareas, desarrollada en **Node.js** con autenticación **JWT**, control de acceso por middleware y gates, y persistencia de datos en **MySQL**.

---

## 🚀 Funcionalidades

- Registro e inicio de sesión de usuarios
- Autenticación mediante JWT
- CRUD completo de tareas
- Control de acceso a tareas con Middleware y Gates
- Validación de permisos por usuario
- Arquitectura modular y escalable

---

## 🧾 Requisitos

- Node.js 18+
- MySQL
- npm o yarn

---

## ⚙️ Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/ruben3185/task-manager-backend.git
cd task-manager-backend

npm install
```

## 🛠 Crear base de datos MySQL

Puedes crear la base de datos `task_manager` en MySQL tanto en Windows como en Linux siguiendo estos pasos:

### 🪟 En Windows

1. Abre **cmd** o **PowerShell**.
2. Conéctate al cliente de MySQL:

```bash
mysql -u root -p
```

3. Cremos la DB 

```bash
CREATE DATABASE task_manager;
CREATE USER 'usuario'@'localhost' IDENTIFIED BY 'clave_segura';
GRANT ALL PRIVILEGES ON task_manager.* TO 'usuario'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

4. Creacion de tabas
```bash
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  description TEXT,
  status ENUM('pendiente', 'en_progreso', 'completada') DEFAULT 'pendiente',
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);


```

## 🧾 Crear un archivo .env 

```bash
DB_URL=mysql://usuario:clave_segura@localhost:3306/task_manager

JWT_SECRET=mi_clave_secreta


```


## Run 
```bash
npm run dev 
o 
npm start 
o
node app.js
```

## 📨 Endpoints

### 🔐 Autenticación

| Método | Ruta           | Descripción                  |
|--------|----------------|------------------------------|
| POST   | `/auth/register` | Registro de usuario          |
| POST   | `/auth/login`    | Login y obtención de token JWT |

### 📝 Tareas

| Método | Ruta             | Descripción                          | Protegido |
|--------|------------------|--------------------------------------|-----------|
| GET    | `/tasks`         | Obtener tareas del usuario           | ✅        |
| POST   | `/tasks`         | Crear una nueva tarea                | ✅        |
| PUT    | `/tasks/:taskId` | Editar tarea (con validación ACL)    | ✅        |
| DELETE | `/tasks/:taskId` | Eliminar tarea (con validación ACL)  | ✅        |


### Estructura del proyecto

```bash
/task-manager-backend
│
├── .gitignore
├── .env
├── app.js
│
├── config
│   ├── db.js
│   └── jwt.js
│
├── controllers
│   ├── authController.js
│   └── taskController.js
│
├── middlewares
│   ├── authMiddleware.js
│   └── permissionMiddleware.js
│
├── models
│   ├── userModel.js
│   └── taskModel.js
│
├── routes
│   ├── authRoutes.js
│   └── taskRoutes.js
│
└── services
    └── gateService.js
```

