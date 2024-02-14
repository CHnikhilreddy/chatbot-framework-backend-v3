const OpenAI = require("openai");
require('dotenv').config();

const openai = new OpenAI({
    apiKey: process.env.CHATGPT_API_KEY // This is also the default, can be omitted
});

const valu = [
  {
    message: {
      role: "assistant",
      content:
        "Certainly! Here are four popular brands across different industries:\n\n1. Coca-Cola - One of the world's largest beverage companies known for its carbonated soft drinks.\n2. Apple - A multinational technology company renowned for its innovative products such as iPhones, Mac computers, and the Apple Watch.\n3. Nike - A global sportswear and athletic shoe brand popular for its high-quality athletic apparel and footwear.\n4. Amazon - A leading e-commerce platform offering a wide range of products and services, including online shopping, streaming services, and cloud computing.",
    },
  },
];

async function chatgptfunction(query) {
  const completions = await openai.chat.completions
    .create({
    //   messages: [{ role: "user", content: "Hi GPT My name is nikhil" }],
      messages: query,
      model: "gpt-3.5-turbo",
    })
    return completions.choices
}

module.exports = { chatgptfunction };