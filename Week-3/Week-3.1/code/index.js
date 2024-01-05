/*
const express = require("express");

const app = express();

app.get("/health-checkup", function (req, res) {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.query.kidneyId;

  if (username != "akash" || password != "pass") {
    res.status(400).json({"msg": "User not exists"})
    return
  }

  if (kidneyId != 1 && kidneyId != 2) {
    res.status(400).json({"msg": "Somethings up with your ionputs"})
    return
  }
  // do something with kidney here
  res.json({
    msg: "Your kidney is fine!"
  })
});

app.listen(3000);
*/

/*

const express = require("express");


const app = express();


//middleware 1
function userMiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;
  if(username != 'john' && password == 'pass') {
    res.status(400).json({ msg: 'Invaild User!' });
  }else{
    next();
  }
}

//middleware 2
function kidneyMiddleware(req, res, next) {
  const kidneyId = req.query.kidneyId;

  if(kidneyId != 1 && kidneyId != 2) {
    res.json({ msg: 'Incorrect inputs' });
  }else{
    next();
  }
}


//using multiple middlewares
app.get('/heart-checkup', userMiddleware, kidneyMiddleware, function (req, res) {
  res.send('Your heart is healthy!');
});

app.get('/kidney-checkup', userMiddleware, kidneyMiddleware, function (req, res) {
  res.send('Your kidney is healthy!');
});

//using only one middleware
app.get('/health-checkup', userMiddleware, function (req, res) {
  res.send('Your health is fine!');
});

app.listen(3000)
*/

//zod
const express = require('express');
const { z } = require('zod');
const app = express();

app.use(express.json());

const loginSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(6),
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  try {
    loginSchema.parse({ username, password });
    // Proceed with authentication logic
    // ...
    res.json({ success: true });
  } catch (error) {
    res.status(400).json({ error: 'Invalid input.', details: error.errors });
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
