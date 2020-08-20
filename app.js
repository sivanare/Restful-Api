const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

// free mongo database https://mlab.com/

// import Routes
const postsRoute = require('./routes/posts');
const aboutRoute = require('./routes/about');

// Middleware
app.use('/posts', postsRoute);
app.use('/about', aboutRoute);
// app.use('/posts', () => {
//   console.log('From middleware');
// });

//ROUTES
app.get('/', (req, res) => {
  res.send('we are on home');
});

// connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,

  { useNewUrlParser: true },

  () => console.log('db is connected')
);

// to listen to the server
app.listen(3000);
