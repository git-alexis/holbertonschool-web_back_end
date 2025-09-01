const express = require('express');
const app = express();
const PORT = 7865;

app.get('/', (request, response) => {
  response.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (request, response) => {
  const id = request.params.id;
  response.send('Payment methods for cart ' + id);
});

app.listen(PORT, () => {
  console.log('API available on localhost port ' + PORT);
});
