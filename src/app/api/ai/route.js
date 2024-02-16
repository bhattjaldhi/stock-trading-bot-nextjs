const { Assistant } = require('openai');

const assistant = new Assistant({
    apiKey: 'YOUR_API_KEY'
});

const assistantResponse = await assistant.create({
    name: "Math Tutor",
    instructions: "You are a personal math tutor. Write and run code to answer math questions.",
    tools: [{ type: "code_interpreter" }],
    model: "gpt-3.5"
});

export async function callAssistant() {
    
}