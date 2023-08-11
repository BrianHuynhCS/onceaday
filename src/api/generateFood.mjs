const { API_KEY, API_BASE_URL } = require('./apiConfig.js');

const generateFood = async () => {
  try {
  const response = await fetch(API_BASE_URL, {
    method:"POST",
    headers:{
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: "Can you pick for me a cultural food to eat?"}],
      temperature: 0.7
    }),
  });


  const data = await response.json();
  console.log(data);
  console.log(data.choices);
} catch (error) {
  console.error("Error:", error);
}};

async function run(){
  await generateFood();
}

run();