import 'dotenv/config';
import { ChatGroq } from "@langchain/groq";
import readline from "readline/promises";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const model = new ChatGroq({
    model: "openai/gpt-oss-120b",
    temperature: 0
});

while (true) {
    const userInput = await rl.question("\x1b[32mWhat's in your mind? 😊:\x1b[0m ");

    if (userInput.toLowerCase() === "exit") {
        break;
    }

    try {
        const response = await model.invoke(userInput);
        console.log("\x1b[36mAI CHATBOT 🤖:\x1b[0m", response.text);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

rl.close();