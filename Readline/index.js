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
    const userInput = await rl.question("What's in your mind? 😊: ");

    if (userInput.toLowerCase() === "exit") {
        break;
    }

    try {
        const response = await model.invoke(userInput);
        console.log("AI CHATBOT 🤖: ",response.text);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

rl.close();