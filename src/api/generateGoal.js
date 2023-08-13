const { API_KEY, API_BASE_URL } = require('./apiConfig.js');

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
      messages: [{ role: "user", content: "Can you give me one goal to accomplish today? Give me at most a two sentence response."}]
    }),
  });


  const data = await response.json();
  return data.choices[0].message.content;

} catch (error) {
  return "Error generating food."
}};

module.exports = generateGoal;
