const express = require('express');
const app = express();
const PORT = 7865;

app.use(express.json());

app.get('/', (request, response) => {
  response.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (request, response) => {
  const id = request.params.id;
  response.send('Payment methods for cart ' + id);
});

app.get('/available_payments', (request, response) => {
  response.json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

app.post('/login', (request, response) => {
  const { userName } = request.body;
  if (userName) {
    response.send('Welcome ' + userName);
  } else {
    response.status(400).send('Missing userName');
  }
});

app.listen(PORT, () => {
  console.log('API available on localhost port ' + PORT);
});
