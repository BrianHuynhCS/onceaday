// const axios = require('axios');
const API_KEY = require('./apiConfig.js').API_KEY;

const API_BASE_URL = "https://api.openai.com/v1/chat/completions"; // Base URL for the ChatGPT API
// const API_KEY = process.env.REACT_APP_OPENAI_API_KEY; // Your API key


const generateGoal = async () => {
  try {
  const response = await fetch(API_BASE_URL, {
    method:"POST",
    headers:{
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: "Can you give me one goal to accomplish today?"}],
      temperature: 0.7
    }),
  });

  console.log(response.headers.Authorization);

  const data = await response.json();
  console.log(data);
  console.log(data.choices);
} catch (error) {
  console.error("Error:", error);
}};

async function run(){
  await generateGoal();
}

run();
