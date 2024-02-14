const { GoogleGenerativeAI } = require("@google/generative-ai");

const gemini_api_key = "AIzaSyC_oqjpmDMGzfo4KqOWdsx6u901MUb3Ti0";

const genAI = new GoogleGenerativeAI(gemini_api_key);

async function geminifunction() {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const prompt = "Write a story about a magic backpack.";
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  return { body: text };
}

module.exports = { geminifunction }
