const express = require('express');
const bodyParser = require('body-parser');
const AfricasTalking = require('africastalking');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Initialize Africa's Talking
const africastalking = AfricasTalking({
  username: process.env.AFRICASTALKING_USERNAME,
  apiKey: process.env.AFRICASTALKING_API_KEY,
});

// Handle USSD requests
app.post('/ussd', async (req, res) => {
  const { sessionId, serviceCode, text } = req.body;

  // Handle USSD menu logic and interactions here
  let response = '';

  // ...

  // Send USSD response
  const ussdResponse = await africastalking.USSD.send({
    sessionId,
    serviceCode,
    text: response,
  });

  res.status(200).send(ussdResponse);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});