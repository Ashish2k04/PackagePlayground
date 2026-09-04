# LangChain + Groq Chatbot 🤖

A simple terminal-based chatbot built using **LangChain** and **Groq**.

This project takes user input from the terminal and sends it to an AI model using LangChain.

## 📦 Packages Used

Install the required packages:

```bash
npm install dotenv @langchain/groq
```

The project also uses Node.js's built-in `readline/promises` module to take input from the terminal.

### `dotenv`

Used to load environment variables from the `.env` file.

The Groq API key is stored in the `.env` file instead of directly writing it inside the code.

### `@langchain/groq`

Used to connect LangChain with Groq and interact with the selected chat model.

### `readline/promises`

A built-in Node.js module used to take user input directly from the terminal.

No separate installation is required for `readline/promises`.

---

## 🔑 Environment Variables

Create a `.env` file in the project root:

```env
GROQ_API_KEY=YOUR_GROQ_API_KEY
```

Add your Groq API key to `GROQ_API_KEY`.

---

## 🌐 Using a Different Model

The model used in this project is:

```js
model: "openai/gpt-oss-120b"
```

If you want to use a different model, replace the model name according to the model available on Groq.

You may also need to install and use a different LangChain provider package depending on the model/provider you choose.

Check the [LangChain documentation](https://docs.langchain.com/) to find the appropriate integration and package for your model.

---

## ⚙️ How It Works

The basic flow of the chatbot is:

```text
User enters a message
        ↓
readline/promises
        ↓
ChatGroq
        ↓
Groq AI Model
        ↓
AI Response
        ↓
Response displayed in terminal
```

---

## 💻 How the Code Works

### 1. Load Environment Variables

```js
import 'dotenv/config';
```

Loads the variables from the `.env` file so the API key can be accessed by the application.

---

### 2. Import ChatGroq

```js
import { ChatGroq } from "@langchain/groq";
```

Imports `ChatGroq`, which allows LangChain to communicate with Groq's chat models.

---

### 3. Create Terminal Input

```js
import readline from "readline/promises";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
```

Creates a readline interface that allows the user to enter messages in the terminal.

---

### 4. Create the AI Model

```js
const model = new ChatGroq({
    model: "openai/gpt-oss-120b",
    temperature: 0
});
```

Creates a `ChatGroq` model.

- `model` → selects the AI model to use.
- `temperature` → controls how random the model's responses are.

A temperature of `0` makes the responses more consistent.

---

### 5. Take User Input

```js
const userInput = await rl.question("What's in your mind? 😊: ");
```

Waits for the user to enter a message in the terminal.

---

### 6. Exit the Chatbot

```js
if (userInput.toLowerCase() === "exit") {
    break;
}
```

If the user enters `exit`, the chatbot stops the loop.

---

### 7. Send the Message to the Model

```js
const response = await model.invoke(userInput);
```

Sends the user's message to the selected AI model through LangChain.

---

### 8. Display the Response

```js
console.log(response.text);
```

Prints the AI's response in the terminal.

---

### 9. Handle Errors

```js
try {
    // AI request
} catch (error) {
    console.error("Error:", error.message);
}
```

The `try...catch` block prevents the application from crashing if an error occurs while communicating with the model.

---

### 10. Close the Readline Interface

```js
rl.close();
```

Closes the terminal input interface after the chatbot exits.

---

## ▶️ Run the Project

Start the chatbot with:

```bash
node app.js
```

Then enter a message:

```text
What's in your mind? 😊: What is JavaScript?
```

The AI response will be displayed directly in the terminal.

Type:

```text
exit
```

to stop the chatbot.

---

## 🎯 What I Learned

- How to use LangChain with Groq
- How to use `ChatGroq`
- How to select an AI model
- How to use environment variables with `dotenv`
- How to take terminal input using `readline/promises`
- How to send messages using `model.invoke()`
- How to handle errors with `try...catch`
- How to build a simple terminal-based AI chatbot