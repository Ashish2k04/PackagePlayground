# Express Error Handling Middleware ⚠️

A simple Express.js project to learn how to create and use a **global error-handling middleware**.

This project demonstrates how an error can be caught inside a controller, passed to the error middleware using `next(error)`, and then returned as a proper JSON response.

---

## 📦 Packages Used

Install the required packages:

```bash
npm install express dotenv
```

### Express

Used to create the server, routes, controllers, and error-handling middleware.

### dotenv

Used to load environment variables from the `.env` file.

In this project, `dotenv` is used to check whether the application is running in development mode.

---

# 🤔 What is Error-Handling Middleware?

Error-handling middleware is a special middleware in Express used to handle errors that occur during request processing.

Unlike normal middleware, an Express error-handling middleware has **four parameters**:

```js
(error, req, res, next)
```

Example:

```js
function handleError(error, req, res, next) {
    // Handle error
}
```

The first parameter must be `error`.

---

# 🔄 Error Handling Flow

The basic flow of this project is:

```text
Client Request
      ↓
Express Route
      ↓
Controller
      ↓
Something goes wrong
      ↓
catch(error)
      ↓
next(error)
      ↓
Global Error Middleware
      ↓
JSON Error Response
```

---

# 📁 Project Structure

```text
Error-Middleware-Not-a-package/
├── src/
│   ├── controllers/
│   │   └── auth.controller.js
│   ├── middlewares/
│   │   └── error.middleware.js
│   ├── routes/
│   │   └── auth.route.js
│   └── app.js
├── .env
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

---

# 🧩 How It Works

## 1️⃣ Controller

The controller contains the main request logic.

```js
async function registerUserController(req, res, next) {
    try {
        // Controller logic
    }
    catch(error) {
        error.status = 500;
        next(error);
    }
}
```

If an error occurs, the `catch` block receives the error.

We then add a status code:

```js
error.status = 500;
```

and pass the error to Express:

```js
next(error);
```

---

# 2️⃣ `next(error)`

Normally, `next()` moves the request to the next middleware.

But when we pass an error:

```js
next(error);
```

Express knows that an error has occurred and looks for an **error-handling middleware**.

The error is then passed to:

```js
handleError(error, req, res, next)
```

---

# 3️⃣ Global Error Middleware

The error middleware is registered in `app.js`:

```js
app.use(handleError);
```

This middleware receives the error:

```js
export function handleError(error, req, res, next) {
    const response = {
        message: error.message
    };

    return res.status(error.status).json(response);
}
```

It creates a response containing the error message and sends it back to the client.

---

# 🛠️ Error Response

The middleware creates:

```js
const response = {
    message: error.message
};
```

So the client receives a JSON response such as:

```json
{
    "message": "Something went wrong."
}
```

The status code comes from:

```js
error.status
```

For example:

```js
error.status = 500;
```

results in:

```text
HTTP 500
```

---

# 🧪 Development Error Stack

The project uses an environment variable:

```env
NODE_ENVIRONMENT=development
```

The error middleware checks:

```js
if(process.env.NODE_ENVIRONMENT === "development") {
    response.stack = error.stack;
}
```

When running in development mode, the error stack is included in the response.

Example:

```json
{
    "message": "Something went wrong.",
    "stack": "Error: Something went wrong..."
}
```

The stack is useful during development because it helps find where the error occurred.

---

# 🔐 Why Hide the Error Stack in Production?

The error stack can contain internal information about the application.

For example, it may reveal:

- File paths
- Function names
- Internal application details
- Code execution information

Therefore, it is useful during development but generally should not be exposed to users in production.

---

# 📌 Middleware Order

The order of middleware is important.

In `app.js`:

```js
app.use(express.json());

app.use('/api', authRouter);

app.use(handleError);
```

The error middleware is placed **after the routes**.

The flow is:

```text
Request
   ↓
express.json()
   ↓
authRouter
   ↓
Controller
   ↓
next(error)
   ↓
handleError
```

If an error is passed using:

```js
next(error)
```

Express skips normal middleware and looks for error-handling middleware.

---

# 🚀 API

The project contains a simple registration API:

```http
POST /api/register
```

Example request:

```json
{
    "username": "Ashish",
    "email": "ashish@example.com",
    "password": "12345678"
}
```

The controller currently returns the received username and email.

---

# 🌍 Environment Variables

Create a `.env` file:

```env
PORT=3000

NODE_ENVIRONMENT=development
```

### `PORT`

Defines the port on which the Express server runs.

### `NODE_ENVIRONMENT`

Defines the application environment.

In this project:

```env
NODE_ENVIRONMENT=development
```

allows the error stack to be included in the response.

---

# ▶️ Run the Project

Install dependencies:

```bash
npm install
```

Start the server:

```bash
node server.js
```

You should see:

```text
Server is running on port 3000
```

---

# 🎯 What I Learned

- What Express error-handling middleware is
- Why error middleware has four parameters
- How `try...catch` handles controller errors
- How `next(error)` passes an error to Express
- How to create a global error handler
- How to create a consistent JSON error response
- How to use custom error status codes
- How environment variables can control error details
- Why error stacks should generally be hidden in production
- Why middleware order is important in Express

---

## 📚 Useful Links

- [Express Documentation](https://expressjs.com/)
- [Express Error Handling](https://expressjs.com/en/guide/error-handling.html)
- [dotenv on npm](https://www.npmjs.com/package/dotenv)