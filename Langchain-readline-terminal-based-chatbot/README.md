# LangChain + Groq AI Agent 🤖

A simple terminal-based AI chatbot built using **LangChain**, **Groq**, **Zod**, and **Nodemailer**.

This project started as a simple chatbot, but was extended to demonstrate how a **LangChain Agent can use tools** to perform real-world tasks.

In this project, the AI can understand the user's request and use an email tool to send an email through **Nodemailer**.

---

# 📦 Packages Used

Install the required packages:

```bash
npm install dotenv @langchain/groq langchain zod nodemailer
```

The project also uses Node.js's built-in:

```text
readline/promises
```

No separate installation is required for `readline/promises`.

---

## `dotenv`

Used to load environment variables from the `.env` file.

Sensitive information such as API keys and email credentials should be stored inside `.env` instead of directly writing them in the code.

---

## `@langchain/groq`

Used to connect LangChain with **Groq** and use a Groq-supported chat model.

The model used in this project is:

```js
model: "openai/gpt-oss-120b"
```

---

## `langchain`

Used for LangChain functionality such as:

- `HumanMessage`
- `tool`
- `createAgent`

These are used to create the conversation and AI agent.

---

## `zod`

Used to define and validate the input that the AI is allowed to send to the email tool.

For example:

```js
z.object({
    to: z.string().email(),
    html: z.string(),
    subject: z.string()
})
```

This makes sure that the tool receives the expected type of data.

---

## `nodemailer`

Used to actually send emails.

In this project, the Nodemailer email function is placed inside:

```text
mail.service.js
```

The function is then connected to LangChain as a tool.

---

# 🔑 Environment Variables

Create a `.env` file in the project root.

The exact variables required for the email service depend on the Nodemailer configuration inside `mail.service.js`.

For example:

```env
GROQ_API_KEY=YOUR_GROQ_API_KEY

GOOGLE_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET=YOUR_GOOGLE_CLIENT_SECRET
GOOGLE_REFRESH_TOKEN=YOUR_GOOGLE_REFRESH_TOKEN
GOOGLE_USER=YOUR_EMAIL
```

Do not upload your real `.env` file to GitHub.

Add this to `.gitignore`:

```text
.env
```

---

# 🌐 Groq API Key

The Groq API key is required by `ChatGroq`.

You can get your API key from the official Groq website:

[Groq Console](https://console.groq.com/)

Store the key inside `.env`:

```env
GROQ_API_KEY=YOUR_GROQ_API_KEY
```

---

# 🌐 LangChain Documentation

If you want to use a different model or model provider, check the official LangChain documentation:

[LangChain Documentation](https://docs.langchain.com/)

Depending on the model/provider you choose, you may need to install a different LangChain integration package and change the model configuration.

For example, this project uses:

```js
import { ChatGroq } from "@langchain/groq";
```

and:

```js
const model = new ChatGroq({
    model: "openai/gpt-oss-120b",
    temperature: 0
});
```

---

# 📁 Project Structure

```text
Langchain-readline-terminal/
├── node_modules/
├── .env
├── .env.example
├── index.js
├── mail.service.js
├── package.json
├── package-lock.json
└── README.md
```

---

# 🧠 Basic Chatbot Flow

The chatbot takes input from the terminal and sends it to the AI agent.

```text
User
 ↓
Terminal Input
 ↓
HumanMessage
 ↓
Messages Array
 ↓
LangChain Agent
 ↓
Groq Model
 ↓
AI Response
```

---

# 🤖 What is an Agent?

A LangChain Agent is different from simply calling a model.

A normal model call can look like:

```text
User
 ↓
Model
 ↓
Response
```

An Agent can decide whether it needs to use a tool to complete the user's request.

```text
User
 ↓
Agent
 ↓
Does the request require a tool?
      ↓
   Yes ↓
      Tool
       ↓
   Function
       ↓
   Result
       ↓
     Agent
       ↓
   AI Response
```

In this project, the agent has access to an **email tool**.

---

# 🛠️ Creating a Tool

The email function from `mail.service.js` is converted into a LangChain tool:

```js
const emailTool = tool(sendEmail, {
    name: "emailTool",
    description: "Use this tool to send an email.",
    schema: z.object({
        to: z.string().email().describe("The recipent's email adress."),
        html: z.string().describe("The html content of the email."),
        subject: z.string().describe("The subject of the email."),
    })
})
```

The important parts are:

### `sendEmail`

```js
tool(sendEmail, ...)
```

The existing email function is given to LangChain as the function that should be executed when the tool is called.

---

### `name`

```js
name: "emailTool"
```

Gives the tool a name that the agent can identify.

---

### `description`

```js
description: "Use this tool to send an email."
```

The description tells the AI what the tool is capable of doing.

This helps the agent decide when the tool should be used.

---

### `schema`

```js
schema: z.object({
    to: z.string().email(),
    html: z.string(),
    subject: z.string()
})
```

The schema defines what information the email tool expects.

It also uses **Zod** for validation.

For example:

```js
to: z.string().email()
```

requires `to` to contain a valid email address.

---

# 🧩 Zod + LangChain Tool

The relationship between Zod and the tool is:

```text
AI Agent
   ↓
Decides to use emailTool
   ↓
Creates tool arguments
   ↓
Zod validates the arguments
   ↓
sendEmail()
   ↓
Nodemailer
   ↓
Email Sent
```

So Zod helps make sure that the data passed to the tool follows the expected structure.

---

# 🧠 Creating the Agent

The model and tool are given to `createAgent()`:

```js
const agent = createAgent({
    model,
    tools: [emailTool]
})
```

This creates an AI agent that has access to:

```text
Groq Model
+
emailTool
```

The agent can decide when the email tool is required.

---

# 📧 Nodemailer + LangChain

The email functionality is separated into:

```text
mail.service.js
```

The email service contains the actual Nodemailer logic.

The LangChain tool uses that function:

```text
LangChain Agent
      ↓
  emailTool
      ↓
  sendEmail()
      ↓
mail.service.js
      ↓
  Nodemailer
      ↓
   Email
```

This keeps the email-sending logic separate from the chatbot logic.

---

# 💬 Conversation Messages

The project maintains a `messages` array:

```js
let messages = []
```

Whenever the user enters a message:

```js
messages.push(new HumanMessage(userInput));
```

The user's message is added to the conversation history.

The agent then receives the messages:

```js
const response = await agent.invoke({messages});
```

After the agent responds, the latest message is added back:

```js
messages.push(response.messages[response.messages.length - 1]);
```

This allows the application to maintain the conversation history during the current session.

---

# 🖥️ Terminal Input

The project uses Node.js's built-in `readline/promises` module:

```js
import readline from "readline/promises";
```

A readline interface is created:

```js
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
```

The user can then enter messages directly in the terminal:

```js
const userInput = await rl.question("What's in your mind? 😊: ");
```

---

# 🚪 Exiting the Chatbot

The chatbot continuously runs inside a loop:

```js
while (true) {
    // chatbot logic
}
```

If the user enters:

```text
exit
```

the loop is stopped:

```js
if (userInput.toLowerCase() === "exit") {
    break;
}
```

Finally, the readline interface is closed:

```js
rl.close();
```

---

# 🔄 Complete Project Flow

The complete flow of this project is:

```text
                  User
                   ↓
            Terminal Input
                   ↓
             HumanMessage
                   ↓
             messages[]
                   ↓
            LangChain Agent
                   ↓
              Groq Model
                   ↓
        ┌──────────┴──────────┐
        ↓                     ↓
  Normal Request        Email Request
        ↓                     ↓
   AI Response            emailTool
                              ↓
                         Zod Schema
                              ↓
                         sendEmail()
                              ↓
                        mail.service.js
                              ↓
                         Nodemailer
                              ↓
                           Email
```

---

# 🧪 Example

You can start the chatbot:

```text
What's in your mind? 😊:
```

For a normal question:

```text
What's in your mind? 😊: What is JavaScript?
```

The agent can simply answer the question.

For an email-related request:

```text
What's in your mind? 😊: Send an email to example@gmail.com saying hello.
```

The agent can decide to use:

```text
emailTool
```

The tool receives the required information:

```text
to
subject
html
```

Then:

```text
emailTool
   ↓
sendEmail()
   ↓
Nodemailer
   ↓
Email
```

---

# ⚠️ Important

Never expose sensitive information such as:

- Groq API keys
- OAuth Client Secrets
- OAuth Refresh Tokens
- Email credentials

Keep them inside `.env`.

Do not commit `.env` to GitHub.

Use `.env.example` with placeholder values instead:

```env
GROQ_API_KEY=YOUR_GROQ_API_KEY

GOOGLE_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET=YOUR_GOOGLE_CLIENT_SECRET
GOOGLE_REFRESH_TOKEN=YOUR_GOOGLE_REFRESH_TOKEN
GOOGLE_USER=YOUR_EMAIL
```

---

# ▶️ Run the Project

Install dependencies:

```bash
npm install
```

Create your `.env` file and add the required API keys and email configuration.

Then run:

```bash
node index.js
```

The chatbot will start in the terminal.

Type:

```text
exit
```

to stop it.

---

# 🎯 What I Learned

- How to use LangChain with Groq
- How to use `ChatGroq`
- How to create a LangChain Agent
- How to use `createAgent()`
- How LangChain tools work
- How to create a tool using `tool()`
- How an Agent decides when to use a tool
- How to connect an existing JavaScript function with a LangChain tool
- How to use Zod schemas with LangChain tools
- How to validate tool input using Zod
- How to maintain conversation messages using `HumanMessage`
- How to use `model.invoke()` / agent invocation
- How to take terminal input using `readline/promises`
- How to integrate LangChain with Nodemailer
- How an AI Agent can perform a real-world action using a tool
- How to separate email functionality into a service
- How to build a terminal-based AI Agent

---

## 📚 Useful Links

- [LangChain Documentation](https://docs.langchain.com/)
- [Groq Console](https://console.groq.com/)
- [Groq Documentation](https://console.groq.com/docs)
- [Zod Documentation](https://zod.dev/)
- [Nodemailer Documentation](https://nodemailer.com/)