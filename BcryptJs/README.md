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
ashish
```

We store a hashed version of it:

```text
ashish
   ↓
bcrypt.hash()
   ↓
$2b$10$xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

This helps protect user passwords.

---

## 💻 How the Code Works

### 1. Store a Normal Password

```js
const PASSWORD = "ashish";
```

This is the original password that we want to hash.

---

### 2. Hash the Password

```js
const hashPassword = await bcrypt.hash(PASSWORD, 10);
```

`bcrypt.hash()` converts the normal password into a hashed password.

The `10` is called **salt rounds**.

Salt rounds decide how much work bcrypt does while creating the hash.

```text
Normal Password
      ↓
bcrypt.hash(PASSWORD, 10)
      ↓
Hashed Password
```

---

## 🔄 Why Does the Hash Change Every Time?

If you run the program multiple times, the same password can generate different hashes.

For example:

```text
ashish
   ↓
Hash 1 → $2b$10$xxxxxxxx

ashish
   ↓
Hash 2 → $2b$10$yyyyyyyy
```

Even though the hashes look different, bcrypt can still verify the correct password.

---

## 🔑 Compare Passwords

After creating the hash, the code compares the original password with the hashed password:

```js
const compare = await bcrypt.compare(PASSWORD, hashPassword);
```

`bcrypt.compare()` checks whether the normal password matches the hashed password.

```text
Normal Password
      ↓
bcrypt.compare()
      ↓
Compare with Hashed Password
      ↓
true / false
```

If the password is correct:

```text
true
```

If the password is incorrect:

```text
false
```

---

## 📤 Output

The program prints:

```js
console.log(hashPassword);

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

- `bcrypt.hash()` → Converts a normal password into a hashed password.
- `10` → Salt rounds used while creating the hash.
- `bcrypt.compare()` → Checks if a normal password matches a hashed password.
- Correct password → `true`
- Incorrect password → `false`

### Main Flow

```text
Normal Password
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