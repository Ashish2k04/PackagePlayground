# Mongoose

A simple project to understand how **Mongoose connects an Express application to MongoDB**.

---

## 📦 Installation

```bash
npm install express mongoose dotenv bcryptjs
```

---

## 📁 Project Structure

```text
Mongoose/
│
├── src/
│   ├── config/
│   │   └── database.js
│   ├── controllers/
│   │   └── user.controller.js
│   ├── models/
│   │   └── user.model.js
│   ├── routes/
│   │   └── user.route.js
│   └── app.js
│
├── .env
├── server.js
├── package.json
└── README.md
```

---

## 🔄 Application Flow

```text
server.js
    ↓
Connect MongoDB
    ↓
app.js
    ↓
user.route.js
    ↓
user.controller.js
    ↓
user.model.js
    ↓
MongoDB
```

---

## 🗄️ MongoDB Setup

This project uses **MongoDB Atlas**.

You need a MongoDB connection string and store it inside the `.env` file.

```env
MONGODB_URI=your_mongodb_connection_string
```

### Steps to Get MongoDB URI

1. Go to [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database).
2. Create or log in to your MongoDB Atlas account.
3. Create a project and cluster.
4. Create a database user with a username and password.
5. Add your IP address in Network Access.
6. Click **Connect** → **Drivers**.
7. Copy the connection string.
8. Replace `<password>` with your database user's password.
9. Add the final URI to your `.env` file.

Example:

```text
mongodb+srv://USERNAME:PASSWORD@cluster.mongodb.net/DATABASE_NAME
```

⚠️ Never upload your real MongoDB URI to GitHub.

---

## ⚙️ `.env` Setup

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
```

- `PORT` → The port on which the server runs.
- `MONGODB_URI` → Used by Mongoose to connect to MongoDB.

---

## 🖥️ Server Flow

`server.js`:

1. Loads environment variables.
2. Imports the Express app.
3. Imports and calls `connectDB()`.
4. Starts the server.

```text
server.js
   ↓
connectDB()
   ↓
MongoDB Connected
   ↓
app.listen()
   ↓
Server Starts
```

---

## 🔌 Database Connection

`database.js` connects the application to MongoDB.

```text
.env
   ↓
MONGODB_URI
   ↓
database.js
   ↓
mongoose.connect()
   ↓
MongoDB
```

---

## 👤 User Model

`user.model.js` defines how a user is stored in MongoDB:

```text
User
├── username
├── email
└── password
```

It also handles:

- Required fields
- Unique username and email
- Password minimum length
- Password hashing using `bcryptjs`

Before saving:

```text
Password
   ↓
bcrypt.hash()
   ↓
Hashed Password
   ↓
MongoDB
```

During login:

```text
Entered Password
   ↓
bcrypt.compare()
   ↓
Compare with Hashed Password
   ↓
true / false
```

---

## 🛣️ Routes

### Register

```text
POST /api/register
```

Runs:

```text
registerController
```

### Login

```text
GET /api/login
```

Runs:

```text
loginController
```

---

## 🎮 Controller Flow

### Register

```text
Client sends data
      ↓
Check username/email
      ↓
User already exists?
   ↓ Yes       ↓ No
Error       Create User
                 ↓
           Hash Password
                 ↓
             Save User
                 ↓
           Send Response
```

### Login

```text
Client sends credentials
        ↓
Find User
        ↓
User Found?
   ↓ No       ↓ Yes
404 Error   Compare Password
                 ↓
           Password Correct?
             ↓ Yes   ↓ No
           Success   401 Error
```

---

## 🔗 Import / Export Flow

```text
database.js
    ↓ exports connectDB
server.js
    ↓ imports and calls connectDB()

user.model.js
    ↓ exports userModel
user.controller.js
    ↓ imports userModel

user.controller.js
    ↓ exports controllers
user.route.js
    ↓ imports controllers

user.route.js
    ↓ exports userRouter
app.js
    ↓ imports userRouter

app.js
    ↓ exports app
server.js
    ↓ imports app and starts the server
```

---

## 🧪 Test with Postman

### Register User

**Method:** `POST`

```text
http://localhost:3000/api/register
```

**Body → raw → JSON:**

```json
{
    "username": "Ashish",
    "email": "ashish@example.com",
    "password": "123456"
}
```

### Login User

**Method:** `GET`

```text
http://localhost:3000/api/login
```

```text
http://localhost:3000/api/login
```

---

## 🧠 Simple Summary

- **server.js** → Starts the server and connects MongoDB.
- **database.js** → Connects Mongoose to MongoDB.
- **app.js** → Creates the Express application.
- **route** → Sends requests to the correct controller.
- **controller** → Contains the main logic.
- **model** → Defines the MongoDB data structure.
- **bcryptjs** → Hashes and compares passwords.