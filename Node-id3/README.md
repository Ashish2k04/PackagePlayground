# Node-ID3 🎵

A simple Node.js project to learn and practice the **node-id3** package.

This project demonstrates how to read, write, update, and remove ID3 metadata from MP3 files.

## 📦 Installation

```bash
npm install node-id3
npm install express multer dotenv
```

## 🤔 What is Node-ID3?

**Node-ID3** is a Node.js package used to work with ID3 metadata of MP3 files.

ID3 metadata can contain information such as:

- 🎵 Title
- 👤 Artist
- 💿 Album
- 📅 Year
- 🎼 Genre
- 🖼️ Album Artwork

For example:

```text
Title  → Brother (Hindi)
Artist → Ravi Basrur
Album  → Marco
```

## 📁 Project Structure

```text
Node-id3/
├── src/
│   ├── controllers/
│   │   └── nodeid3.controller.js
│   ├── middlewares/
│   │   └── upload.middlware.js
│   ├── routes/
│   │   └── nodeid3.route.js
│   └── app.js
├── server.js
├── .env
├── package.json
└── README.md
```

## ⚙️ How It Works

The uploaded MP3 file is handled using **Multer memory storage**.

```text
🎵 MP3 File
     ↓
📦 Multer
     ↓
req.file.buffer
     ↓
🎧 Node-ID3
     ↓
📋 Song Metadata
```

Multer temporarily stores the uploaded MP3 in memory as a Buffer instead of saving it to the disk.

The maximum file size allowed in this project is **10 MB**.

## 🚀 APIs

The server runs on:

```text
http://localhost:3000
```

All Node-ID3 routes start with:

```text
/api
```

For every API, use Postman:

```text
Body → form-data
Key  → song
Type → File
```

### 1️⃣ Read Metadata

```http
POST /api/upload-song
```

Reads the ID3 metadata from the uploaded MP3.

Example response:

```json
{
    "message": "Song details.",
    "info": {
        "title": "Brother (Hindi)",
        "artist": "Ravi Basrur, Deepak Bharti, Saaj Bhatt",
        "album": "Marco (Hindi) (Original Motion Picture Soundtrack)"
    }
}
```

### 2️⃣ Update Metadata

```http
POST /api/update-song
```

Updates existing metadata of the uploaded MP3.

Current example:

```text
Title  → Updated Song
Artist → Ashish Tiwari
Album  → PackagePlayground
```

### 3️⃣ Write Metadata

```http
POST /api/write-song
```

Writes metadata to the uploaded MP3.

Current example:

```text
Title  → My New Song
Artist → Ashish Tiwari
Album  → PackagePlayground
```

### 4️⃣ Remove Metadata

```http
POST /api/remove-tags-song
```

Removes ID3 metadata from the uploaded MP3.

Example response:

```json
{
    "message": "Song metadata removed successfully."
}
```

## 🧠 Important Methods

### `id3.read()`

Reads metadata from an MP3 file.

```js
const info = id3.read(song);
```

### `id3.update()`

Updates existing metadata.

```js
const updatedSong = id3.update(tags, song);
```

### `id3.write()`

Writes metadata to an MP3 file.

```js
const updatedSong = id3.write(tags, song);
```

### `id3.removeTags()`

Removes ID3 metadata from an MP3 file.

```js
id3.removeTags(song);
```

## 📦 Multer + Node-ID3

Multer handles the uploaded MP3 file:

```js
upload.single('song')
```

Because `memoryStorage()` is being used, the uploaded file can be accessed through:

```js
req.file.buffer
```

This Buffer is then passed to Node-ID3.

```js
const song = req.file.buffer;

const info = id3.read(song);
```

Complete flow:

```text
Client
  ↓
Upload MP3
  ↓
Multer
  ↓
req.file.buffer
  ↓
Node-ID3
  ↓
Read / Write / Update / Remove Metadata
```

## ▶️ Run the Project

Start the server using:

```bash
node server.js
```

You should see:

```text
Server is running on port 3000
```

## ⚠️ Note

This project uses `multer.memoryStorage()`, so uploaded files are temporarily stored in memory.

The maximum file size is:

```text
10 MB
```

This project is created for learning and quick reference purposes.

## 🎯 What I Learned

- How to use `node-id3`
- How to read MP3 metadata
- How to write MP3 metadata
- How to update MP3 metadata
- How to remove MP3 metadata
- How to use Multer memory storage
- How to work with uploaded files as Buffers
- How Node-ID3 works with MP3 file data