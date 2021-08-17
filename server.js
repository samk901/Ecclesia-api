require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const { connectToDb } = require('./db.js');
const { installHandler } = require('./api_handler.js');
const auth = require('./auth.js');
const todoRoute = require('./todobackend/routes/todo.route.js');

const app = express();

app.use(cookieParser());
app.use('/auth', auth.routes);
app.use('/todo', todoRoute);

installHandler(app);

const port = process.env.PORT || 3000;

(async function start() {
  try {
    await connectToDb();
    app.listen(port, () => {
      console.log(`AppAPI server started on port ${port}`);
    });
  } catch (err) {
    console.log('ERROR:', err);
  }
}());
