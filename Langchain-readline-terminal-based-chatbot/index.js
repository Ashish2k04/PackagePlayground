import 'dotenv/config';
import { ChatGroq } from "@langchain/groq";
import readline from "readline/promises";
import { HumanMessage, tool, createAgent } from 'langchain';
import { sendEmail } from './mail.service.js';
import * as z from 'zod';


const emailTool = tool(sendEmail, {
    name: "emailTool",
    description: "Use this tool to send an email.",
    schema: z.object({
        to: z.string().email().describe("The recipent's email adress."),
        html: z.string().describe("The html content of the email."),
        subject: z.string().describe("The subject of the email."),

    })
})


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const model = new ChatGroq({
    model: "openai/gpt-oss-120b",
    temperature: 0
});

const agent = createAgent({
    model,
    tools: [emailTool]
})

let messages = []

while (true) {
    const userInput = await rl.question("\x1b[32mWhat's in your mind? 😊:\x1b[0m ");

    messages.push(new HumanMessage(userInput));

    if (userInput.toLowerCase() === "exit") {
        break;
    }

    try {
        const response = await agent.invoke({messages});
        console.log("\x1b[36mAI CHATBOT 🤖:\x1b[0m", response.text);
        messages.push(response.messages[response.messages.length - 1]);
        console.log(response)
    } catch (error) {
        console.error("Error:", error.message);
    }
}

rl.close();