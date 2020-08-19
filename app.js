const express = require('express');
const app = express();

// free mongo database https://mlab.com/

// Middleware

// app.use('/posts', () => {
//   console.log('From middleware');
// });

//ROUTES
app.get('/', (req, res) => {
  res.send('we are on home');
});
app.get('/posts', (req, res) => {
  res.send('we are on posts');
});

// to listen to the server
app.listen(3000);
