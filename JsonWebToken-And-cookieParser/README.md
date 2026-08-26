# JsonWebToken-And-cookieParser

A simple authentication project to understand how **jsonwebtoken** and **cookie-parser** work together.

This project contains three APIs:

- 📝 Register a new user
- 🔑 Login and generate a JWT
- 🔒 Access a protected user route

---

## 📦 Packages Used

```bash
npm install express mongoose bcryptjs jsonwebtoken cookie-parser dotenv
```

### Main Packages

- **jsonwebtoken** → Creates and verifies JWT tokens
- **cookie-parser** → Reads cookies from incoming requests
- **bcryptjs** → Hashes and compares passwords
- **mongoose** → Connects and interacts with MongoDB

---

## 📁 Project Structure

```text
JsonWebToken-And-cookieParser/
│
├── src/
│   ├── config/
│   │   └── database.js
│   │
│   ├── controllers/
│   │   └── user.controller.js
│   │
│   ├── middlewares/
│   │   └── auth.middelware.js
│   │
│   ├── models/
│   │   └── user.model.js
│   │
│   ├── routes/
│   │   └── user.route.js
│   │
│   └── app.js
│
├── .env
├── server.js
└── README.md
```

---

## ⚙️ Environment Setup

Create a `.env` file in the root folder:

```env
PORT=3000

MONGODB_URI=YOUR_MONGODB_CONNECTION_STRING

JWT_SECRET=YOUR_JWT_SECRET
```

---

## 🗄️ MongoDB Setup

Get your MongoDB connection string from:

[MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

After creating your database connection, add the URI to:

```env
MONGODB_URI=YOUR_MONGODB_CONNECTION_STRING
```

---

## 🔑 JWT Secret Setup

JWT needs a secret key to create and verify tokens.

You can generate a secure JWT secret from:

[JWT Secret Generator](https://jwtsecrets.com/)

Then add it to your `.env` file:

```env
JWT_SECRET=YOUR_GENERATED_SECRET
```

⚠️ Never upload your real JWT secret to GitHub.

---

## 🔄 How This Project Works

### 📝 1. Register

Send a request to:

```text
POST /api/register
```

Example body:

```json
{
    "username": "Ashish",
    "email": "ashish@example.com",
    "password": "123456"
}
```

### Flow

```text
User Data
    ↓
Check if User Already Exists
    ↓
Create User
    ↓
Password Gets Hashed
    ↓
Create JWT Token
    ↓
Store Token in Cookie
    ↓
User Registered
```

A JWT is created using:

```js
jwt.sign({ id: user._id }, process.env.JWT_SECRET);
```

The user's ID is stored inside the JWT payload.

---

### 🔑 2. Login

Send a request to:

```text
GET /api/login
```

Example body:

```json
{
    "username": "Ashish",
    "password": "123456"
}
```

### Flow

```text
Login Request
    ↓
Find User
    ↓
Compare Password
    ↓
Password Correct
    ↓
Create JWT
    ↓
Store JWT in Cookie
    ↓
Login Successful
```

---

## 🍪 How Cookie-Parser Works

After login or registration, the JWT is stored in a cookie:

```js
res.cookie("token", token);
```

The cookie conceptually looks like:

```text
token = YOUR_JWT_TOKEN
```

When the user sends another request, `cookie-parser` helps Express read that cookie.

```js
app.use(cookieParser());
```

The token can then be accessed using:

```js
req.cookies.token
```

---

## 🔒 3. Protected User API

The user route is protected by authentication middleware:

```text
GET /api/user
```

The route uses:

```js
userRouter.get(
    '/user',
    authenticateUser,
    getUserController
);
```

### Protected Route Flow

```text
Request /api/user
        ↓
authenticateUser Middleware
        ↓
Read Token from req.cookies
        ↓
jwt.verify()
        ↓
Token Valid?
   ↙          ↘
 YES          NO
  ↓            ↓
Continue     Error
  ↓
Get User Data
```

The middleware reads the token:

```js
const token = req.cookies.token;
```

Then verifies it:

```js
jwt.verify(token, process.env.JWT_SECRET);
```

If the token is valid, the decoded data is stored in:

```js
req.user
```

The controller can then access the user ID:

```js
const userId = req.user.id;
```

---

## 🔍 Check JWT Data

If you want to see what data is inside a JWT, use:

[JWT.io Debugger](https://jwt.io/)

JWT.io can decode a JWT and show its:

- Header
- Payload
- Data inside the token

A JWT generally looks like:

```text
HEADER.PAYLOAD.SIGNATURE
```

For example, this project stores the user ID inside the payload:

```js
{
    id: "USER_ID"
}
```

⚠️ Never store passwords or sensitive information inside a JWT payload.

---

## 🧠 Complete Authentication Flow

```text
REGISTER / LOGIN
       ↓
Create JWT using jwt.sign()
       ↓
Store JWT inside Cookie
       ↓
User sends request to protected route
       ↓
cookie-parser reads the Cookie
       ↓
req.cookies.token
       ↓
jwt.verify()
       ↓
Valid Token
       ↓
Store decoded data in req.user
       ↓
Access Protected Route 🔒
```

---

## ▶️ Run the Project

Install dependencies:

```bash
npm install
```

Then run:

```bash
node server.js
```

---

## 🧪 APIs

| Method | Route | Description |
|---|---|---|
| POST | `/api/register` | Register a new user |
| GET | `/api/login` | Login and receive JWT cookie |
| GET | `/api/user` | Get authenticated user data 🔒 |

---

## 🧠 Simple Summary

- `jwt.sign()` → Creates a JWT
- `res.cookie()` → Stores the JWT in a cookie
- `cookie-parser` → Reads cookies from requests
- `req.cookies.token` → Gets the JWT from the cookie
- `jwt.verify()` → Verifies the JWT
- `req.user` → Stores the decoded JWT data
- `authenticateUser` → Protects the `/user` route

```text
JWT + Cookie-Parser
        ↓
Cookie-Based Authentication 🔐
```