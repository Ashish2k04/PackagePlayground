# Express-Validator

A simple project to understand how **express-validator** validates data sent to an Express API.

This project validates user registration data before it reaches the controller.

---

## 📦 Installation

Install the required packages:

```bash
npm install express express-validator
```

---

## 📁 Project Structure

```text
Express-validator/
│
├── src/
│   ├── controllers/
│   │   └── auth.controller.js
│   │
│   ├── routes/
│   │   └── auth.route.js
│   │
│   ├── validations/
│   │   └── auth.validator.js
│   │
│   └── app.js
│
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

---

## 🔄 How It Works

The registration request follows this flow:

```text
Client Request
      ↓
/api/register
      ↓
validateUser
      ↓
Validate Username
Validate Email
Validate Password
      ↓
Any Errors?
   ↙       ↘
 YES       NO
  ↓         ↓
Return     registerController
Errors        ↓
            Success
```

---

## 📝 Register API

Send a POST request to:

```text
http://localhost:3000/api/register
```

Example request body:

```json
{
    "username": "Ashish",
    "email": "ashish@example.com",
    "password": "12345678"
}
```

---

## 🔍 Validation Rules

### Username

```js
body('username').isLength({min: 4, max: 12})
```

The username must contain:

```text
Minimum: 4 characters
Maximum: 12 characters
```

---

### Email

```js
body('email')
    .trim()
    .toLowerCase()
    .isEmail()
```

- `.trim()` → Removes extra spaces
- `.toLowerCase()` → Converts the email to lowercase
- `.isEmail()` → Checks whether the email format is valid

---

### Password

```js
body('password')
    .trim()
    .isLength({min: 8, max: 12})
```

The password must contain:

```text
Minimum: 8 characters
Maximum: 12 characters
```

---

## ❌ Validation Errors

If any validation fails, `validationResult()` collects the errors:

```js
const error = validationResult(req);
```

Then this checks whether there are any errors:

```js
error.isEmpty()
```

If errors exist, they are returned to the client:

```js
error.array()
```

Example response:

```json
{
    "error": [
        {
            "msg": "Please enter a valid email."
        }
    ]
}
```

---

## 🧠 Middleware Flow

The `validateUser` array contains multiple middleware functions:

```text
Username Validation
        ↓
Email Validation
        ↓
Password Validation
        ↓
authValidator
        ↓
Check validationResult()
        ↓
Valid? ─────── No → Return Errors
  ↓ Yes
registerController
```

This is used inside the route:

```js
authRouter.post(
    '/register',
    validateUser,
    registerController
);
```

So the controller will only run if the validation passes.

---

## ▶️ Run the Project

Start the server:

```bash
node server.js
```

Then test the API using Postman:

```text
POST http://localhost:3000/api/register
```

---

## 🧠 Simple Summary

- `body()` → Selects data from `req.body`
- `.isLength()` → Checks the length of data
- `.isEmail()` → Checks whether an email is valid
- `.trim()` → Removes extra spaces
- `.toLowerCase()` → Converts text to lowercase
- `validationResult()` → Gets validation errors
- `error.isEmpty()` → Checks if there are no errors
- `error.array()` → Returns all errors

```text
express-validator
        ↓
Validate Request Data
        ↓
Valid? → Continue to Controller
Invalid? → Return Errors
```

123
456
789
123
456
123