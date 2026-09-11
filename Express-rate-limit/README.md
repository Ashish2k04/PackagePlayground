# Express Rate Limit 🚦

A simple Express.js project to learn and practice **express-rate-limit**.

This project demonstrates how to limit the number of requests a client can make to an API within a specific amount of time.

In this project, the login API allows a maximum of **5 requests per minute**.

---

## 📦 Packages Used

This project uses only two packages:

- **Express**
- **express-rate-limit**

Install them using:

```bash
npm install express express-rate-limit
```

---

## 🤔 What is Rate Limiting?

Rate limiting controls how many requests a client can send to an API within a specific time period.

For example, this project allows:

```text
5 requests
within
1 minute
```

If the client sends more than 5 requests within that one-minute window, the additional requests are blocked.

### Without Rate Limiting

```text
Client
  ↓
Request 1 → API ✅
Request 2 → API ✅
Request 3 → API ✅
Request 4 → API ✅
Request 5 → API ✅
Request 6 → API ❌
Request 7 → API ❌
...
```

Rate limiting helps protect APIs from excessive or repeated requests.

---

# 📁 Project Structure

```text
Express-rate-limit/
├── src/
│   ├── controllers/
│   │   └── auth.controller.js
│   ├── middlewares/
│   │   └── rateLimit.middlware.js
│   ├── routes/
│   │   └── auth.route.js
│   └── app.js
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

---

# ⚙️ How It Works

The rate limiter is created as middleware:

```js
import {rateLimit} from 'express-rate-limit';

export const loginLimiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    limit: 5,
    message: "Too many requests, please try again later."
})
```

There are three important options in this example.

---

## `windowMs`

```js
windowMs: 1 * 60 * 1000
```

Defines the amount of time during which requests are counted.

Calculation:

```text
1 minute
×
60 seconds
×
1000 milliseconds

= 60,000 milliseconds
```

So:

```js
windowMs: 1 * 60 * 1000
```

means the rate limit window is **1 minute**.

---

## `limit`

```js
limit: 5
```

Defines the maximum number of requests allowed during the configured time window.

In this project:

```text
5 requests / 1 minute
```

are allowed.

---

## `message`

```js
message: "Too many requests, please try again later."
```

This message is returned when the client exceeds the allowed request limit.

---

# 🔗 Applying the Rate Limiter

The rate limiter is applied to the login route:

```js
appRouter.post('/login', loginLimiter, loginController);
```

The middleware order is:

```text
POST /api/login
       ↓
 loginLimiter
       ↓
  Is limit exceeded?
     ↙       ↘
   No         Yes
   ↓           ↓
loginController  ❌ Block Request
   ↓
Response
```

The `loginController` will only run when the request passes the rate limiter.

---

# 🚀 API

The server runs on:

```text
http://localhost:3000
```

The router is mounted using:

```js
app.use('/api', appRouter);
```

Therefore, the login API is:

```http
POST /api/login
```

---

## 🧪 Testing with Postman

You can test the API using Postman.

### Request

```text
POST http://localhost:3000/api/login
```

Body → `raw` → `JSON`

```json
{
    "username": "Ashish",
    "email": "ashish@example.com"
}
```

Send the request multiple times.

The first 5 requests are allowed.

The 6th request within the same one-minute window will be blocked.

---

## ❌ When the Limit is Exceeded

The client receives the configured message:

```text
Too many requests, please try again later.
```

The login controller will not be executed for the blocked request.

After the rate-limit window resets, requests can be made again.

---

# 🧠 Complete Code Flow

```text
Client
  ↓
POST /api/login
  ↓
Express Router
  ↓
loginLimiter
  ↓
Check request count
  ↓
┌───────────────────────┐
│ Within 5 requests?    │
└───────────────────────┘
       ↓          ↓
      YES         NO
       ↓           ↓
loginController   Block
       ↓           ↓
   Response      Message
```

---

# 🛡️ Why Use Rate Limiting?

Rate limiting is useful for protecting APIs from:

- Too many requests
- Accidental request loops
- Brute-force login attempts
- API abuse
- Excessive traffic

Login endpoints are especially useful places to apply rate limiting because repeatedly attempting authentication can be abused.

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

- What rate limiting is
- Why APIs need rate limiting
- How to install `express-rate-limit`
- How to create a rate limiter
- How `windowMs` works
- How `limit` works
- How to configure a custom error message
- How to use rate limiting as Express middleware
- How middleware runs before the controller
- How excessive API requests can be blocked
- How to apply rate limiting to a specific route