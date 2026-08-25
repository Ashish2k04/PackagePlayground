# BcryptJs

A simple example to understand how **bcryptjs** is used to hash and compare passwords.

---

## 📦 Installation

Install bcryptjs:

```bash
npm install bcryptjs
```

---

## 📁 Project Structure

```text
BcryptJs/
│
├── app.js
├── package.json
├── package-lock.json
└── README.md
```

---

## 🔐 What is Bcrypt?

`bcryptjs` is mainly used to **hash passwords** before storing them in a database.

Instead of storing a normal password like:

```text
Ashish
```

We store a hashed version of it:

```text
Ashish
   ↓
bcrypt.hash()
   ↓
$2b$10$xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

This helps protect user passwords.

---

## 💻 How the Code Works

### 1. Import BcryptJs

```js
import bcrypt from "bcryptjs";
```

This imports `bcryptjs` so we can use its password hashing and comparison functions.

---

### 2. Hash the Password

```js
const hashPassword = await bcrypt.hash("Ashish", 10);
```

`bcrypt.hash()` converts the normal password into a hashed password.

The `10` is called **salt rounds**.

Salt rounds decide how much work bcrypt does while creating the hash.

```text
Normal Password
      ↓
bcrypt.hash("Ashish", 10)
      ↓
Hashed Password
```

---

## 🔄 Why Does the Hash Change Every Time?

If you run the program multiple times, the same password can generate different hashes.

For example:

```text
Ashish
   ↓
Hash 1 → $2b$10$xxxxxxxx

Ashish
   ↓
Hash 2 → $2b$10$yyyyyyyy
```

Even though the hashes look different, bcrypt can still verify the correct password.

---

## 🔑 Compare Passwords

The code compares the password with the generated hashed password:

```js
const compare = await bcrypt.compare("Ashish", hashPassword);
```

`bcrypt.compare()` checks whether the normal password matches the hashed password.

```text
"Ashish"
      ↓
bcrypt.compare()
      ↓
Compare with Hashed Password
      ↓
true / false
```

Since both passwords are the same in this example:

```js
bcrypt.hash("Ashish", 10);

bcrypt.compare("Ashish", hashPassword);
```

The result will be:

```text
true
```

---

## ❌ What Happens with a Wrong Password?

If we change the password used in `bcrypt.compare()`:

```js
const compare = await bcrypt.compare("WrongPassword", hashPassword);
```

The result will be:

```text
false
```

Because `"WrongPassword"` does not match the password that was originally hashed.

---

## 📤 Output

The program prints the hashed password:

```js
console.log(hashPassword);
```

And the comparison result:

```js
console.log(compare);
```

Example output:

```text
$2b$10$.....................................................
true
```

The hash will usually be different every time you run the program.

---

## ▶️ Run the Project

Run:

```bash
node app.js
```

---

## 🧠 Simple Summary

- `bcrypt.hash("Ashish", 10)` → Converts `"Ashish"` into a hashed password.
- `10` → Salt rounds used while creating the hash.
- `bcrypt.compare("Ashish", hashPassword)` → Checks whether the password matches the hash.
- Same password → `true`
- Different password → `false`

### Main Flow

```text
"Ashish"
    ↓
bcrypt.hash()
    ↓
Hashed Password
    ↓
bcrypt.compare()
    ↓
true / false
```

### Real-World Flow

```text
Register
   ↓
User enters password
   ↓
bcrypt.hash()
   ↓
Store hashed password in Database


Login
   ↓
User enters password
   ↓
bcrypt.compare()
   ↓
Correct / Incorrect
```