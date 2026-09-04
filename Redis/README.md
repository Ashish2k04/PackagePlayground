# Redis + ioredis ⚡

A simple Node.js project to learn and practice **Redis** using the **ioredis** package.

This project demonstrates how to:

- Store data in Redis using `SET`
- Retrieve data using `GET`
- Delete data using `DEL`
- Connect a Node.js application with Redis Cloud
- Store JavaScript objects as JSON strings
- Convert Redis strings back into JavaScript objects

---

## 🤔 What is Redis?

**Redis** is an in-memory data store that can be used as a database, cache, message broker, and more.

Redis stores data using a **key-value** approach.

For example:

```text
Key       → Value
username  → Ashish
```

In this project, the username is used as the Redis key and the user's email is stored as the value.

```text
ashish
  ↓
{"email":"ashish@example.com"}
```

---

## 🧩 What is ioredis?

**ioredis** is a Node.js client that allows our Node.js application to communicate with a Redis server.

In this project:

```text
Node.js Application
        ↓
     ioredis
        ↓
    Redis Cloud
```

Install it using:

```bash
npm install ioredis
```

Other packages used in this project:

```bash
npm install express dotenv
```

---

# ☁️ Redis Cloud Setup

This project uses **Redis Cloud** instead of running Redis locally.

Redis Cloud provides a managed Redis database that we can connect to from our application.

Redis also provides a free database option for learning and development.

You can create a free Redis Cloud database from the official Redis website:

[Redis Cloud](https://redis.io/cloud/)

You can also follow the official Redis Cloud quick start:

[Redis Cloud Quick Start](https://redis.io/docs/latest/operate/rc/rc-quickstart/)

---

## 1️⃣ Create a Redis Account

Go to:

[Redis Cloud](https://redis.io/cloud/)

Create an account or sign in.

After signing in, create a new database.

Redis Cloud currently provides a **30 MB free database** for learning and application prototypes.

---

## 2️⃣ Create a Database

After logging into Redis Cloud:

```text
New database
      ↓
Try 30 MB for free
      ↓
Choose database settings
      ↓
Create database
```

Choose the cloud provider, region, and other settings as required.

Once the database is created, wait until its status becomes active.

---

# 🔑 Getting Redis Connection Details

This project uses four environment variables:

```env
REDIS_HOST=
REDIS_PORT=
REDIS_PASSWORD=
```

along with:

```env
PORT=
```

The `PORT` is for our Express server.

The other three values are used to connect to Redis.

---

## 3️⃣ Get `REDIS_HOST`

Open your Redis Cloud database.

Go to the database's **Configuration** section.

Find the **Endpoint** / connection information.

The endpoint contains the hostname and port.

For example:

```text
redis-12345.c12345.us-east-1-mz.ec2.cloud.rlrcp.com:12345
```

The hostname part is your:

```env
REDIS_HOST=
```

So:

```env
REDIS_HOST=redis-12345.c12345.us-east-1-mz.ec2.cloud.rlrcp.com
```

Redis recommends using the dynamic endpoint when available because it can make future database migration easier.

You can read more about Redis Cloud endpoints here:

[Redis Cloud Database Connection](https://redis.io/docs/latest/operate/rc/databases/connect/)

---

## 4️⃣ Get `REDIS_PORT`

The Redis port is also shown in the database connection details.

From an endpoint such as:

```text
redis-12345.c12345.us-east-1-mz.ec2.cloud.rlrcp.com:12345
```

the port is:

```text
12345
```

Put that value in:

```env
REDIS_PORT=12345
```

---

## 5️⃣ Get `REDIS_PASSWORD`

Redis Cloud protects the database using authentication.

In the database configuration:

```text
Security
   ↓
Default user
   ↓
Configure
   ↓
Show password
```

Redis Cloud normally provides a default user named:

```text
default
```

and a password for that user.

Copy the password and put it in:

```env
REDIS_PASSWORD=YOUR_REDIS_DB_PASSWORD
```

Do **not** upload this password to GitHub.

Redis's official documentation explains where to find the database username and password:

[Redis Cloud Connection Documentation](https://redis.io/docs/latest/operate/rc/databases/connect/)

---

# 📄 `.env` File

Create a `.env` file in the project root:

```env
PORT=3000

REDIS_HOST=YOUR_REDIS_DB_HOST
REDIS_PORT=YOUR_REDIS_DB_PORT
REDIS_PASSWORD=YOUR_REDIS_DB_PASSWORD
```

Replace the placeholder values with the values from your Redis Cloud database.

### ⚠️ Important

Never commit your real `.env` file to GitHub.

Add this to `.gitignore`:

```text
.env
```

---

# 📁 Project Structure

```text
Redis/
├── src/
│   ├── config/
│   │   └── redis.js
│   ├── controllers/
│   │   └── redis.controller.js
│   ├── routes/
│   │   └── redis.route.js
│   └── app.js
├── .env
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

---

# 🔌 Redis Connection

The Redis connection is created in:

```text
src/config/redis.js
```

The application uses `ioredis`:

```js
import Redis from "ioredis";
```

Then a Redis client is created:

```js
const redis = new Redis({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD
});
```

The connection details come from the `.env` file.

So the flow is:

```text
.env
 ↓
process.env
 ↓
ioredis
 ↓
Redis Cloud
```

---

# 🧠 Redis Operations Used

This project demonstrates three basic Redis operations:

```text
SET → Store data
GET → Retrieve data
DEL → Delete data
```

---

## 1️⃣ SET

The `SET` command stores a value using a key.

In this project:

```js
await redis.set(name, JSON.stringify({email}));
```

If the user sends:

```json
{
    "name": "Ashish",
    "email": "ashish@example.com"
}
```

Redis stores something similar to:

```text
Key:
Ashish

Value:
{"email":"ashish@example.com"}
```

### Why `JSON.stringify()`?

Redis commonly stores values as strings.

But JavaScript objects cannot be directly stored as normal Redis string values.

So:

```js
JSON.stringify({email})
```

converts:

```js
{
    email: "ashish@example.com"
}
```

into:

```text
{"email":"ashish@example.com"}
```

---

# 2️⃣ GET

The `GET` command retrieves a value using its key.

```js
const user = await redis.get(name);
```

For example:

```text
name = "Ashish"
```

Redis searches for:

```text
Ashish
```

and returns:

```text
{"email":"ashish@example.com"}
```

---

## 🔄 Why `JSON.parse()`?

Because the data was stored using `JSON.stringify()`, we need to convert it back into a JavaScript object.

```js
const decode = JSON.parse(user);
```

So:

```text
Redis String
     ↓
JSON.parse()
     ↓
JavaScript Object
```

Example:

```text
{"email":"ashish@example.com"}
```

becomes:

```js
{
    email: "ashish@example.com"
}
```

---

# 3️⃣ DEL

The `DEL` command removes a key from Redis.

```js
const deleted = await redis.del(name);
```

If the key exists:

```text
deleted = 1
```

If the key does not exist:

```text
deleted = 0
```

That's why the controller checks:

```js
if(!deleted)
```

If nothing was deleted, the application returns:

```text
User not found.
```

---

# 🚀 API Endpoints

The Express server runs on:

```text
http://localhost:3000
```

All Redis routes start with:

```text
/api
```

---

## 1️⃣ Store User

### Endpoint

```http
POST /api/register
```

### Request Body

```json
{
    "name": "Ashish",
    "email": "ashish@example.com"
}
```

### What happens?

```text
Request
  ↓
registerController
  ↓
redis.set()
  ↓
Redis Cloud
  ↓
User data stored
```

### Response

```json
{
    "message": "User created.",
    "info": {
        "username": "Ashish",
        "email": "ashish@example.com"
    }
}
```

---

# 2️⃣ Get User Email

### Endpoint

```http
POST /api/get-email
```

### Request Body

```json
{
    "name": "Ashish"
}
```

### What happens?

```text
Request
  ↓
getEmailController
  ↓
redis.get()
  ↓
Redis Cloud
  ↓
JSON.parse()
  ↓
User information
```

### Response

```json
{
    "message": "Fetched your data successfuly.",
    "success": true,
    "info": {
        "user": "Ashish",
        "email": "ashish@example.com"
    }
}
```

If the user does not exist:

```json
{
    "message": "User not found.",
    "success": false
}
```

---

# 3️⃣ Delete User

### Endpoint

```http
DELETE /api/delete-user
```

### Request Body

```json
{
    "name": "Ashish"
}
```

### What happens?

```text
Request
  ↓
deleteUserController
  ↓
redis.del()
  ↓
Redis Cloud
  ↓
Key deleted
```

### Response

```json
{
    "message": "User deleted successfully.",
    "success": true
}
```

---

# 🔄 Complete Project Flow

The complete application flow looks like this:

```text
                CLIENT
                  │
                  ▼
             Express API
                  │
                  ▼
              Controller
                  │
                  ▼
               ioredis
                  │
                  ▼
             Redis Cloud
```

### Store Data

```text
POST /register
      ↓
redis.set()
      ↓
Redis
```

### Retrieve Data

```text
POST /get-email
      ↓
redis.get()
      ↓
JSON.parse()
      ↓
Response
```

### Delete Data

```text
DELETE /delete-user
      ↓
redis.del()
      ↓
Redis
      ↓
Success Response
```

---

# 🧪 Testing with Postman

You can test all APIs using Postman.

### Store

```text
POST http://localhost:3000/api/register
```

Body → `raw` → `JSON`

```json
{
    "name": "Ashish",
    "email": "ashish@example.com"
}
```

### Get

```text
POST http://localhost:3000/api/get-email
```

Body:

```json
{
    "name": "Ashish"
}
```

### Delete

```text
DELETE http://localhost:3000/api/delete-user
```

Body:

```json
{
    "name": "Ashish"
}
```

---

# ▶️ Run the Project

Install dependencies:

```bash
npm install
```

Make sure your `.env` file contains the Redis Cloud connection details.

Then start the server:

```bash
node server.js
```

You should see:

```text
Redis is connected and ready to work.
Server is runnig on port 3000
```

---

# 🎯 What I Learned

- What Redis is
- What ioredis is
- How to connect Node.js with Redis Cloud
- How to create a Redis Cloud database
- How to get Redis host, port, and password
- How to use environment variables for Redis credentials
- How `redis.set()` works
- How `redis.get()` works
- How `redis.del()` works
- Why `JSON.stringify()` is used before storing objects
- Why `JSON.parse()` is used after retrieving JSON strings
- How Redis uses key-value storage
- How Node.js communicates with Redis through ioredis
- How to build basic Redis APIs with Express

---

## 📚 Useful Links

- [Redis](https://redis.io/)
- [Redis Cloud](https://redis.io/cloud/)
- [Redis Cloud Quick Start](https://redis.io/docs/latest/operate/rc/rc-quickstart/)
- [Redis Cloud Database Connection](https://redis.io/docs/latest/operate/rc/databases/connect/)
- [ioredis on npm](https://www.npmjs.com/package/ioredis)