# 📋 Task Manager Backend

![GitHub repo size](https://img.shields.io/github/repo-size/ruben3185/task-manager-backend?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/ruben3185/task-manager-backend?style=flat-square)
![License](https://img.shields.io/github/license/ruben3185/task-manager-backend?style=flat-square)

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


## 🧾 Crear un archivo .env 

```bash

PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tu_password
DB_NAME=task_manager
JWT_SECRET=una_clave_secreta

```


## Run 
```bash
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
