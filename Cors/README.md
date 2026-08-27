# CORS

A simple project to understand how the **cors** package works with an Express server.

CORS allows a frontend running on a different origin to make requests to your backend.

---

## 📦 Installation

Install the required packages:

```bash
npm install express cors
```

---

## 📁 Project Structure

```text
CORS/
│
├── src/
│   └── app.js
│
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

---

## ❓ What is CORS?

Imagine your frontend and backend are running on different addresses:

```text
Frontend
http://localhost:5173
        ↓
        ↓ Request
        ↓
Backend
http://localhost:3000
```

Because both have different origins, the browser may block the request unless the backend allows that frontend using CORS.

---

## ⚙️ Basic CORS Setup

First, import the package:

```js
import cors from "cors";
```

Then configure it as middleware:

```js
app.use(cors());
```

This enables CORS with the default settings.

---

## 🔒 CORS Configuration Used in This Project

This project uses:

```js
app.use(cors({
    origin: "http://localhost:5173/",
    credentials: true
}));
```

### `origin`

```js
origin: "http://localhost:5173/"
```

This specifies which frontend origin is allowed to send requests to the backend.

```text
http://localhost:5173 → Allowed ✅
```

---

### `credentials`

```js
credentials: true
```

This allows credentials such as cookies to be sent with cross-origin requests.

This is useful when authentication uses cookies.

```text
Frontend
    ↓ Cookie
Backend
```

---

## 🧠 Simple CORS Flow

```text
Frontend
http://localhost:5173
        ↓
     Request
        ↓
     CORS Check
        ↓
Allowed Origin?
   ↙          ↘
 YES          NO
  ↓            ↓
Request      Browser
Allowed      Blocks Request
```

---

## 🔑 Important CORS Options

### `origin`

Controls which frontend origins are allowed.

```js
origin: "http://localhost:5173"
```

---

### `credentials`

Allows credentials such as cookies to be sent.

```js
credentials: true
```

---

### `methods`

Controls which HTTP methods are allowed.

```js
methods: ["GET", "POST", "PUT", "PATCH", "DELETE"]
```

---

### `allowedHeaders`

Controls which request headers can be used.

```js
allowedHeaders: [
    "Content-Type",
    "Authorization"
]
```

For example:

```text
Content-Type: application/json
```

Means:

> The request body contains JSON data.

And:

```text
Authorization: Bearer YOUR_TOKEN
```

Means:

> Authentication information is being sent using a token.

---

## ▶️ Run the Project

Install dependencies:

```bash
npm install
```

Start the server:

```bash
node server.js
```

The server will run on:

```text
http://localhost:3000
```

---

## 🧠 Simple Summary

```text
CORS
 ↓
Controls which origins can access your backend

origin
 ↓
Which frontend is allowed?

credentials
 ↓
Allow cookies and authentication credentials

methods
 ↓
Which HTTP methods are allowed?

allowedHeaders
 ↓
Which request headers are allowed?
```

CORS is mainly configured on the **backend**, while the browser checks and enforces the cross-origin rules.