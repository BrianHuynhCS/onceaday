const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  API_KEY: process.env.REACT_APP_OPENAI_API_KEY,
  API_BASE_URL: "https://api.openai.com/v1/chat/completions", // Base URL for the ChatGPT API
};