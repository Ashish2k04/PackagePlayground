# Express

This folder contains a simple Express server example.

The purpose of this example is to understand how an Express application is structured and how different files are connected using **import** and **export**.

---

## 📦 Installation

Install Express:

```bash
npm install express
```

Install dotenv:

```bash
npm install dotenv
```

---

# 📁 Project Structure

```text
express/
│
├── src/
│   ├── app.js
│   │
│   ├── routes/
│   │   └── example.route.js
│   │
│   └── controllers/
│       └── example.controller.js
│
├── server.js
├── .env
├── package.json
└── README.md
```

---

# 🚀 How the Application Works

The complete flow is:

```text
server.js
    ↓
app.js
    ↓
example.route.js
    ↓
example.controller.js
    ↓
JSON Response
```

Each file has a different responsibility.

---

# 1. `server.js`

This is the file where the server starts.

First, dotenv is imported:

```js
import 'dotenv/config'
```

This loads values from the `.env` file into `process.env`.

Then the Express application is imported:

```js
import app from "./src/app.js";
```

The `app` variable was exported from `app.js`, and now it is imported into `server.js`.

Next, the port is created:

```js
const PORT = process.env.PORT || 8000
```

The server first checks if a `PORT` value exists inside the `.env` file.

If it exists, that port will be used.

If it does not exist, the server will use `8000`.

Finally, the server is started:

```js
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})
```

`app.listen()` makes the Express application listen for requests on the selected port.

---

# 2. `.env`

The `.env` file stores environment variables.

Example:

```env
PORT=3000
```

This value can be accessed using:

```js
process.env.PORT
```

So:

```js
process.env.PORT
```

will return:

```text
3000
```

---

# 3. `src/app.js`

This file creates and configures the Express application.

First, Express is imported:

```js
import express from 'express';
```

Then a router is imported:

```js
import exampleRouter from './routes/example.route.js';
```

The router was exported from:

```text
example.route.js
```

Next, an Express application is created:

```js
const app = express();
```

Now the `app` variable contains the Express application.

---

## JSON Middleware

```js
app.use(express.json());
```

This middleware allows Express to read JSON data sent by the client.

For example, if a client sends:

```json
{
    "name": "Ashish"
}
```

Express can read this data using:

```js
req.body
```

---

## Connecting the Router

```js
app.use('/api', exampleRouter);
```

This connects `exampleRouter` with the `/api` path.

The router contains:

```text
/example
```

So the final route becomes:

```text
/api/example
```

Finally, the Express application is exported:

```js
export default app;
```

This allows `server.js` to import the `app` variable.

---

# 4. `src/routes/example.route.js`

This file is responsible for defining routes.

First, `Router` is imported from Express:

```js
import { Router } from 'express';
```

Then the controller is imported:

```js
import exampleController from '../controllers/example.controller.js';
```

The controller was exported from:

```text
example.controller.js
```

Next, a router instance is created:

```js
const exampleRouter = Router();
```

Now a GET route is created:

```js
exampleRouter.get('/example', exampleController);
```

This means:

> When someone sends a GET request to `/example`, run `exampleController`.

The router is then exported:

```js
export default exampleRouter;
```

This allows `app.js` to import and use this router.

---

# 5. `src/controllers/example.controller.js`

The controller contains the function that handles the request.

A controller function is created:

```js
async function exampleController(req,res) {
```

This function receives:

* `req` → Request information from the client.
* `res` → Used to send a response back to the client.

The controller sends a JSON response:

```js
res.json({
    message: "Server is running on route /api/example",
    port: process.env.PORT || 8000
})
```

The client will receive something similar to:

```json
{
    "message": "Server is running on route /api/example",
    "port": 3000
}
```

Finally, the controller is exported:

```js
export default exampleController;
```

This allows `example.route.js` to import and use it.

---

# 🔄 Complete Import and Export Flow

The files are connected like this:

```text
example.controller.js
        │
        │ export default exampleController
        ▼
example.route.js
        │
        │ import exampleController
        │
        │ export default exampleRouter
        ▼
app.js
        │
        │ import exampleRouter
        │
        │ export default app
        ▼
server.js
        │
        │ import app
        ▼
Server Starts
```

---

# 🌐 Request Flow

When you open:

```text
http://localhost:3000/api/example
```

This is what happens:

### Step 1

The request reaches the Express server.

```text
server.js
```

### Step 2

The server is running the Express application from:

```text
app.js
```

### Step 3

`app.js` sees that routes starting with:

```text
/api
```

should go to:

```text
exampleRouter
```

### Step 4

The router receives:

```text
/example
```

So the complete route becomes:

```text
/api/example
```

### Step 5

The router runs:

```js
exampleController
```

### Step 6

The controller sends a JSON response back to the client.

---

# 🧠 Simple Summary

```text
server.js
```

Starts the server.

```text
app.js
```

Creates and configures the Express application.

```text
route file
```

Decides which controller should run for a specific route.

```text
controller file
```

Contains the logic and sends the response.

```text
.env
```

Stores environment variables such as the port number.

---

# ▶️ Run the Project

Run:

```bash
node server.js
```

The server will start on:

```text
http://localhost:3000
```

You can test the example route:

```text
GET http://localhost:3000/api/example
```

Expected response:

```json
{
    "message": "Server is running on route /api/example",
    "port": 3000
}
```

---

## 📌 Main Concept

The most important thing to understand in this project is the connection between files:

> **Controller → Route → App → Server**

And when a request comes from the client:

> **Client → Server → App → Route → Controller → Response**
