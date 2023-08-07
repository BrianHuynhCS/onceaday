const API_BASE_URL = "https://api.openai.com/v1"; // Base URL for the ChatGPT API
export const API_KEY = process.env.REACT_APP_OPENAI_API_KEY; // Your API key

export const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
  baseURL: API_BASE_URL,
};