# Axios & React Router

A full-stack learning project built to understand **Axios** and **React Router** through a practical Notes application.

The project contains a React frontend, an Express + MongoDB backend, and a Bruno collection for API testing.

---

# 🚀 Installation & Setup

This project contains two separate applications:

```text
frontend/
backend/
```

Install the required packages separately in each folder.

---

## 🎨 Frontend

Move into the frontend folder:

```bash
cd frontend
```

### Install Required Packages

The main packages used by this project are:

```bash
npm install axios react-router tailwindcss @tailwindcss/vite lucide-react
```

You can also install them individually:

```bash
npm install axios
npm install react-router
npm install tailwindcss
npm install @tailwindcss/vite
npm install lucide-react
```

> `react`, `react-dom`, Vite, ESLint and the other development tooling are already handled through the project's existing `package.json`. You do not need to manually install every package one by one.

### Main Frontend Packages

#### Axios

```bash
npm install axios
```

**What it does:**  
Axios is an HTTP client used to send requests from the React frontend to the Express backend.

**Work in this project:**

```text
React
  ↓
Axios
  ↓
Express API
```

It is used for:

- Creating notes
- Fetching notes
- Deleting notes

---

#### React Router

```bash
npm install react-router
```

**What it does:**  
React Router is used for client-side routing in React applications.

**Work in this project:**

It creates the application's route:

```text
/
└── Dashboard
```

The project uses:

- `createBrowserRouter`
- `RouterProvider`

---

#### Tailwind CSS

```bash
npm install tailwindcss
```

**What it does:**  
Tailwind CSS is a utility-first CSS framework used to style the application.

**Work in this project:**

It is used to style:

- Notes
- Forms
- Buttons
- Layout
- Dashboard
- Other UI elements

---

#### @tailwindcss/vite

```bash
npm install @tailwindcss/vite
```

**What it does:**  
This package integrates Tailwind CSS with Vite.

**Work in this project:**

It allows Tailwind CSS to work with the Vite development/build pipeline.

---

#### Lucide React

```bash
npm install lucide-react
```

**What it does:**  
Lucide React provides ready-made SVG icons as React components.

**Work in this project:**

Icons are used in the UI, such as the delete icon used for removing notes.

---

## ▶️ Run Frontend

After installing the packages:

```bash
npm run dev
```

The default Vite development URL is usually:

```text
http://localhost:5173
```

---

# ⚙️ Backend

Open another terminal and move into the backend folder:

```bash
cd backend
```

### Install Required Packages

The main backend packages are:

```bash
npm install express mongoose cors dotenv
```

You can also install them individually:

```bash
npm install express
npm install mongoose
npm install cors
npm install dotenv
```

---

## Main Backend Packages

### Express

```bash
npm install express
```

**What it does:**  
Express is a Node.js web framework used to build backend servers and REST APIs.

**Work in this project:**

Express is used to:

- Create the backend application
- Create API routes
- Handle requests and responses
- Connect controllers and middleware

Example routes:

```text
POST   /api/create-note
GET    /api/get-notes
DELETE /api/delete-note/:noteId
```

---

### Mongoose

```bash
npm install mongoose
```

**What it does:**  
Mongoose is an ODM used to work with MongoDB from Node.js.

**Work in this project:**

Mongoose is used to:

- Connect to MongoDB
- Create the Note schema
- Create the Note model
- Insert notes
- Fetch notes
- Delete notes

---

### CORS

```bash
npm install cors
```

**What it does:**  
CORS allows a frontend running on one origin to communicate with a backend running on another origin.

**Work in this project:**

The React frontend runs on:

```text
http://localhost:5173
```

while the Express backend runs on:

```text
http://localhost:8000
```

CORS allows requests between these two origins.

---

### dotenv

```bash
npm install dotenv
```

**What it does:**  
dotenv loads values from a `.env` file into `process.env`.

**Work in this project:**

It is used to load the MongoDB connection string:

```env
MONGODB_URI=YOUR_MONGODB_URI
```

---

## Nodemon

The backend development command uses:

```bash
npx nodemon server.js
```

Nodemon is used to automatically restart the server whenever backend files change.

It is **not required to be manually installed** because the project runs it through `npx`.

Run the backend with:

```bash
npm run dev
```

---

# 🔐 Environment Variables

Inside the `backend` folder create:

```text
.env
```

Add:

```env
MONGODB_URI=YOUR_MONGODB_URI
```

Example:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/notes
```

Replace it with your own MongoDB connection string.

> ⚠️ Never commit your real `.env` file or database credentials to GitHub.

---

# ▶️ Run Backend

Inside the `backend` folder:

```bash
npm run dev
```

The backend runs on:

```text
http://localhost:8000
```

---

# 📚 What This Project Covers

This project focuses on:

- Axios
- React Router
- React Context
- Custom React Hooks
- REST APIs
- Express.js
- MongoDB
- Mongoose
- CRUD operations
- Bruno API testing
- Feature-based frontend architecture

The application is a simple **Notes application** where users can:

- Create notes
- View notes
- Delete notes

---

# 📡 Axios

Axios is used to communicate between the React frontend and Express backend.

The project keeps API requests inside a service layer instead of directly writing them inside UI components.

Request flow:

```text
React Component
      ↓
Custom Hook
      ↓
API Service
      ↓
Axios
      ↓
Express API
      ↓
MongoDB
```

---

# 🧭 React Router

React Router handles client-side navigation.

The project uses:

```js
createBrowserRouter
RouterProvider
```

Current route:

```text
/
└── Dashboard
```

Router configuration:

```text
frontend/src/app/app.routes.jsx
```

---

# 📝 Notes Application

The application supports:

- Creating notes
- Fetching notes
- Deleting notes

Each note contains:

```text
title
description
createdAt
updatedAt
```

---

# 🌐 Backend APIs

The backend contains **3 APIs**.

## 1. Create Note

```http
POST /api/create-note
```

Request body:

```json
{
  "title": "My Note",
  "description": "This is my note."
}
```

Creates a new note in MongoDB.

---

## 2. Get Notes

```http
GET /api/get-notes
```

Fetches all notes from MongoDB.

---

## 3. Delete Note

```http
DELETE /api/delete-note/:noteId
```

Deletes a note using its MongoDB document ID.

Returns `404` when the requested note does not exist.

---

# 🗄️ MongoDB & Mongoose

MongoDB is used as the database and Mongoose is used as the ODM.

## Note Schema

```text
Note
├── title
├── description
├── createdAt
└── updatedAt
```

### Title

The title:

- Is required
- Is trimmed
- Has a maximum length of 50 characters

### Description

The description:

- Is optional
- Is trimmed
- Defaults to `"No description provided."`

Mongoose timestamps are enabled.

---

# 🧠 React Context

The project uses React Context for note-related state.

`NoteContext` provides:

```text
note
setNote
loading
setLoading
```

Application flow:

```text
NoteProvider
      ↓
RouterProvider
      ↓
Dashboard
      ↓
useNotes()
```

---

# 🪝 Custom Hook

The project contains a custom `useNotes` hook.

It connects the Notes UI with Context and the API service.

It handles:

- Creating notes
- Fetching notes
- Deleting notes
- Loading state

Flow:

```text
Component
   ↓
useNotes()
   ↓
Note Context
   ↓
API Service
   ↓
Axios
```

---

# 🧩 Frontend Structure

```text
frontend/
└── src/
    ├── app/
    │   ├── App.jsx
    │   ├── app.routes.jsx
    │   └── index.css
    │
    ├── features/
    │   └── notes/
    │       ├── components/
    │       │   ├── Form.jsx
    │       │   └── Card.jsx
    │       ├── hooks/
    │       │   └── useNotes.js
    │       ├── services/
    │       │   └── api.service.js
    │       ├── Dashboard.jsx
    │       └── note.context.jsx
    │
    └── main.jsx
```

---

# 🖥️ Backend Structure

```text
backend/
├── server.js
├── package.json
├── .env
└── src/
    ├── app.js
    ├── config/
    │   └── database.js
    ├── controllers/
    │   └── notes.controller.js
    ├── middlewares/
    │   └── error.middleware.js
    ├── models/
    │   └── note.model.js
    └── routes/
        └── note.route.js
```

---

# 🧪 Bruno

Bruno is used to test the backend APIs separately from the React frontend.

The collection is stored inside:

```text
bruno/
```

Available operations:

```text
Create Note
Get Notes
Delete Note
```

---

# 🔄 Complete Application Flow

```text
                    React Frontend
                          │
                          ▼
                    React Router
                          │
                          ▼
                      Dashboard
                          │
                    ┌─────┴─────┐
                    │           │
                   Form       Cards
                    │           │
                    └─────┬─────┘
                          ▼
                      useNotes()
                          │
                          ▼
                    API Service
                          │
                          ▼
                        Axios
                          │
                          ▼
                  Express Backend
                          │
                          ▼
                       Mongoose
                          │
                          ▼
                       MongoDB
```

---

# 🛠️ Tech Stack

## Frontend

- React
- Vite
- Axios
- React Router
- Tailwind CSS
- Lucide React
- React Context API

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- dotenv

## API Testing

- Bruno

---

# 🎯 Learning Goals

The main goal of this project is to understand how a React frontend communicates with a backend while keeping the code organized.

Through this project, I practiced:

- Installing and using Axios
- Making GET, POST and DELETE requests
- Creating an API service layer
- Using React Router
- Creating routes with `createBrowserRouter`
- Using `RouterProvider`
- Managing state with React Context
- Creating custom hooks
- Structuring a frontend by features
- Building REST APIs with Express
- Connecting MongoDB with Mongoose
- Performing CRUD operations
- Testing APIs with Bruno

---

# 📌 Project Status

This is a **learning project** created to practice Axios and React Router using a practical full-stack Notes application.

Current functionality includes:

- React frontend
- Axios API communication
- React Router
- React Context
- Custom hooks
- Express backend
- MongoDB database
- Mongoose models
- Create note
- Get notes
- Delete note
- Bruno API collection
- Feature-based frontend structure
