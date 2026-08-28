# Nodemailer

A simple project to understand how to send emails using **Nodemailer**, **Gmail**, and **Google OAuth2**.

This project uses Google OAuth2 to authenticate with Gmail and send emails.

---

## 📦 Packages Used

- **Express** → Creates the backend server and API routes.
- **dotenv** → Loads environment variables from the `.env` file.
- **Nodemailer** → Sends emails from Node.js.

---

## 📁 Project Structure

```text
Nodemailer/
│
├── src/
│   ├── controllers/
│   │   └── mail.controller.js
│   │
│   ├── routes/
│   │   └── mail.route.js
│   │
│   ├── services/
│   │   └── mail.service.js
│   │
│   └── app.js
│
├── .env
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

---

# 📥 Installation

Install the required packages:

```bash
npm install express dotenv nodemailer
```

---

# 🔑 Environment Variables

This project requires the following Google OAuth2 values:

```env
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_REFRESH_TOKEN=
GOOGLE_USER=
```

### What do these values do?

```text
GOOGLE_CLIENT_ID
        ↓
Identifies your application to Google

GOOGLE_CLIENT_SECRET
        ↓
A secret credential for your OAuth application

GOOGLE_REFRESH_TOKEN
        ↓
Allows your application to get access to Gmail when needed

GOOGLE_USER
        ↓
The Gmail address used to send emails
```

---

# ☁️ Step 1: Create a Google Cloud Project

Open [Google Cloud Console](https://console.cloud.google.com/).

Then:

1. Sign in with your Google account.
2. Click the project selector at the top.
3. Click **New Project**.
4. Enter a project name.
5. Click **Create**.

---

# 📧 Step 2: Enable Gmail API

Inside your Google Cloud project:

1. Open **APIs & Services**.
2. Click **Library**.
3. Search for:

```text
Gmail API
```

4. Open **Gmail API**.
5. Click **Enable**.

You can learn more about the Gmail API here:

[Gmail API Documentation](https://developers.google.com/gmail/api)

---

# 🔐 Step 3: Configure Google OAuth

Inside Google Cloud Console:

1. Open **Google Auth Platform**.
2. Configure your OAuth application.
3. Add your application's basic information.

You may need to provide:

- App name
- User support email
- Developer contact information

For this learning project, you can configure the app for testing.

---

# 👤 Step 4: Add Yourself as a Test User

If your OAuth application is in **Testing** mode:

1. Open the **Audience** section.
2. Find **Test users**.
3. Add the Gmail account you want to use.
4. Save the changes.

This allows your Gmail account to authorize the application while testing.

---

# 🆔 Step 5: Create OAuth Credentials

Open:

**Google Auth Platform → Clients**

Then:

1. Click **Create Client**.
2. Select:

```text
Web Application
```

3. Give your application a name.

Under **Authorized redirect URIs**, add:

```text
https://developers.google.com/oauthplayground
```

Then click **Create**.

Google will give you:

```text
Client ID
Client Secret
```

Copy both values.

Add them to your `.env` file:

```env
GOOGLE_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID

GOOGLE_CLIENT_SECRET=YOUR_GOOGLE_CLIENT_SECRET
```

---

# 🎮 Step 6: Open OAuth 2.0 Playground

Open [Google OAuth 2.0 Playground](https://developers.google.com/oauthplayground/).

This tool helps us generate a **Refresh Token**.

---

# ⚙️ Step 7: Use Your Own OAuth Credentials

Inside the OAuth Playground:

1. Click the ⚙️ **Settings** icon.
2. Enable:

```text
Use your own OAuth credentials
```

3. Paste your:

```text
OAuth Client ID
OAuth Client Secret
```

---

# 📧 Step 8: Select Gmail Permission

In **Step 1: Select & authorize APIs**, select:

```text
Gmail API v1
```

Then select the Gmail permission:

```text
https://www.googleapis.com/auth/gmail.send
```

This permission allows your application to send emails.

Then click:

```text
Authorize APIs
```

Google will ask you to:

1. Select your Gmail account.
2. Sign in.
3. Allow the required permission.

---

# 🔄 Step 9: Get the Refresh Token

After authorization:

1. Go to:

```text
Step 2: Exchange authorization code for tokens
```

2. Click:

```text
Exchange authorization code for tokens
```

You will receive:

```text
Access Token
Refresh Token
```

Copy the **Refresh Token**.

Add it to your `.env` file:

```env
GOOGLE_REFRESH_TOKEN=YOUR_GOOGLE_REFRESH_TOKEN
```

---

# 👤 Step 10: Add Your Gmail Address

Add the Gmail address that you used during authorization:

```env
GOOGLE_USER=YOUR_EMAIL@gmail.com
```

This Gmail account will be used to send emails.

---

# 📝 Final `.env` Example

```env
PORT=3000

GOOGLE_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID

GOOGLE_CLIENT_SECRET=YOUR_GOOGLE_CLIENT_SECRET

GOOGLE_REFRESH_TOKEN=YOUR_GOOGLE_REFRESH_TOKEN

GOOGLE_USER=YOUR_EMAIL@gmail.com
```

⚠️ **Never upload your real `.env` file to GitHub.**

Your `.env` contains sensitive information such as:

- Client Secret
- Refresh Token

---

# 📤 How Sending an Email Works

```text
Client sends request
        ↓
POST /api/send-mail
        ↓
mailRouter
        ↓
mailController
        ↓
sendEmail()
        ↓
Nodemailer Transporter
        ↓
Google OAuth2 Authentication
        ↓
Gmail
        ↓
📧 Email Sent
```

---

# ⚙️ Nodemailer Transporter

The transporter connects Nodemailer with Gmail.

This project uses:

```text
Gmail
+
OAuth2
```

The transporter uses:

```text
GOOGLE_USER
GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET
GOOGLE_REFRESH_TOKEN
```

to authenticate with Google.

---

# 📮 API Endpoint

Send a POST request to:

```text
POST http://localhost:3000/api/send-mail
```

Example request body:

```json
{
    "username": "Ashish",
    "email": "example@gmail.com",
    "password": "example123"
}
```

Successful response:

```json
{
    "message": "Email Sent!"
}
```

---

# ✉️ Reusable `sendEmail()` Function

This project uses a reusable function for sending emails:

```js
await sendEmail({
    to: "example@gmail.com",
    subject: "Test Email",
    html: "<h1>Hello!</h1>"
});
```

The function accepts:

```text
to      → Receiver's email address

subject → Email subject

html    → HTML content

text    → Plain text content
```

This makes the email functionality reusable across different parts of an application.

---

# 🔗 Email Verification Example

Nodemailer can also be combined with JWT for email verification.

The flow looks like this:

```text
User Registers
      ↓
Create User
      ↓
Create JWT Verification Token
      ↓
Send Verification Link by Email
      ↓
User Clicks the Link
      ↓
Backend Verifies JWT
      ↓
User Email Marked as Verified ✅
```

Example verification URL:

```text
http://localhost:3000/api/verify-email?token=JWT_TOKEN
```

---

# ▶️ Run the Project

Start the server:

```bash
node server.js
```

The server will run on:

```text
http://localhost:3000
```

---

# 🧠 Simple Summary

```text
Nodemailer
↓
Sends emails from Node.js

Google OAuth2
↓
Authenticates your application with Google

Client ID + Client Secret
↓
Identifies your OAuth application

Refresh Token
↓
Allows your application to access Gmail when needed

Gmail
↓
Sends the actual email 📧
```

> **The main idea of this project is to use Nodemailer with Gmail and Google OAuth2 to send emails securely from a Node.js application.**