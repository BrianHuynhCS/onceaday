const { API_KEY, API_BASE_URL } = require('./apiConfig.js');

const generateQuote = async () => {
  try {
    const response = await fetch(API_BASE_URL, {
    method:"POST",
    headers:{
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: "Can you give me the quote of the day? Give me a response that is at most two sentences."}],
      temperature: 1
    }),
  });


  const data = await response.json();
  return data.choices[0].message.content;

} catch (error) {
  return "Error generating goal."
}};

export default generateQuote;
