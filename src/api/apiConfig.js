const axios = require('axios');
require('dotenv').config();

const API_BASE_URL = "https://api.openai.com/v1/chat/completions"; // Base URL for the ChatGPT API
const API_KEY = process.env.REACT_APP_OPENAI_API_KEY; // Your API key


async function testAPI() {
  try {
  const response = await fetch(API_BASE_URL, {
    method:"POST",
    headers:{
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: "How are you today?"}],
    }),
  });

  const data = await response.json();
  console.log(data);
  console.log(data.choices);
} catch (error) {
  console.error("Error:", error);
  resultText.innerText = "Error occurred while generating.";
}};


testAPI();