const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

const gemini_api_key = process.env.GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(gemini_api_key);

async function geminifunction() {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const prompt = "Write a story about a magic backpack.";
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  return { body: text };
}

async function geminifunction_multichat(req) {
    console.log(req);
    return {'some':'data'}
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const chat = model.startChat({
        history: [
          {
            role: "user",
            parts: "Hello, I have 2 dogs in my house.",
          },
          {
            role: "model",
            parts: "Great to meet you. What would you like to know?",
          },
        ],
        generationConfig: {
          maxOutputTokens: 100,
        },
      });
    
      const msg = "How many paws are in my house?";
    
      const result = await chat.sendMessage(msg);
      const response = await result.response;
      const text = response.text();
      return text;
  }

module.exports = { geminifunction, geminifunction_multichat }
