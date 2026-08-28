# Multer And ImageKit

A simple project to understand how **Multer** and **ImageKit** work together to upload images from an Express backend.

---

## 📦 Packages Used

- **Express** → Creates the backend server and API routes.
- **dotenv** → Loads environment variables from the `.env` file.
- **Multer** → Receives uploaded files.
- **ImageKit** → Uploads and stores images in the cloud.

---

## 📁 Project Structure

```text
Multer-And-ImageKit/
│
├── src/
│   ├── config/
│   │   └── imagekit.js
│   │
│   ├── controllers/
│   │   └── upload.controller.js
│   │
│   ├── middlewares/
│   │   └── multer.middleware.js
│   │
│   ├── routes/
│   │   └── upload.route.js
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

## 📥 Installation

Install all required packages:

```bash
npm install express dotenv multer @imagekit/nodejs
```

---

# 🔑 ImageKit Setup

Create an ImageKit account:

[IMAGEKIT.IO](https://imagekit.io/)

After creating your account:

1. Open your ImageKit dashboard.
2. Scroll through the left sidebar/navigation.
3. Go to **Developer Options**.
4. Find **Private API Key**.
5. Enter your ImageKit account password if required.
6. Copy the Private API Key.
7. Paste it inside your `.env` file.

Example:

```env
PORT=3000

IMAGEKIT_PRIVATE_KEY=YOUR_IMAGEKIT_PRIVATE_KEY
```

⚠️ **Never upload your real `.env` file or private API key to GitHub.**

---

# 📤 How Image Upload Works

The complete flow is:

```text
User uploads an image
        ↓
POST /api/upload
        ↓
Multer receives the image
        ↓
Multer Memory Storage
        ↓
req.file.buffer
        ↓
ImageKit
        ↓
Image uploaded to the cloud
        ↓
ImageKit returns the image URL
        ↓
Backend sends the URL as a response
```

---

# 🧠 Multer Memory Storage

This project uses:

```js
storage: multer.memoryStorage()
```

This means the uploaded file is temporarily stored in the server's **RAM (memory)**.

The file is not permanently saved inside an `uploads/` folder.

After Multer receives the file:

```js
req.file.buffer
```

contains the uploaded file data.

That buffer is then sent directly to ImageKit.

---

# 📁 Multer File Size Limit

This project allows files up to **5 MB**:

```js
limits: {
    fileSize: 5 * 1024 * 1024
}
```

This helps prevent users from uploading unnecessarily large files.

---

# 🚀 API Endpoint

### Upload an Image

```text
POST /api/upload
```

When testing with Postman:

```text
Body
↓
form-data
↓
Key: image
Type: File
↓
Select an image
```

⚠️ The field name must be:

```text
image
```

Because the route uses:

```js
upload.single('image')
```

---

# ☁️ ImageKit Upload

The uploaded image buffer is converted to Base64 and sent to ImageKit:

```text
req.file.buffer
        ↓
buffer.toString('base64')
        ↓
ImageKit Upload
```

After a successful upload, ImageKit returns information about the image.

This project sends the image URL back to the user:

```json
{
    "message": "View the image by opening the link given below in your browser.",
    "url": "IMAGE_URL"
}
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

Upload endpoint:

```text
POST http://localhost:3000/api/upload
```

---

# 🧠 Simple Summary

```text
Multer
↓
Receives the uploaded file

Memory Storage
↓
Temporarily stores the file in RAM

req.file.buffer
↓
Contains the uploaded file data

ImageKit
↓
Uploads and stores the image in the cloud

Image URL
↓
Can be saved in a database and used later
```

The main idea of this project is:

> **Receive the image with Multer, upload it directly to ImageKit, and use the returned image URL instead of permanently storing the image on your backend server.**