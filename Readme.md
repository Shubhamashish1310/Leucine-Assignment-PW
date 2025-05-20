# 🛡️ User Access Management System

A full-stack role-based software access system built with:

- **Backend**: Node.js, Express.js, PostgreSQL, TypeORM
- **Frontend**: React (optional)
- **Auth**: JWT, bcrypt
- **Roles**: Admin | Manager | Employee

---

## 📦 Features

- User Signup/Login with JWT
- Role-based Access Control
- Admin can create Software
- Employees can request access
- Managers can approve/reject requests
- PostgreSQL + TypeORM + Secure password hashing

---

## 🔐 Roles

| Role     | Permissions                         |
|----------|-------------------------------------|
| Admin    | Create software                     |
| Employee | Request access                      |
| Manager  | View and approve/reject requests    |

---

## 📂 API Endpoints

### Auth
- `POST /api/auth/signup`
- `POST /api/auth/login`

### Software (Admin)
- `POST /api/software`
- `GET /api/software`

### Access Requests
- `POST /api/requests` (Employee)
- `GET /api/requests` (Manager)
- `PATCH /api/requests/:id` (Manager)

---

## 🛠️ Setup

```bash
npm install
npm run dev
