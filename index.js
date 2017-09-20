const express = require('express');
const bodyParser = require('body-parser');

const messages = [];


const app = express();
app.use(express.static('assets'))
app.use(bodyParser.json())

app.get('/messages', function (req, res, next) {
  res.status(200).json({ messages: messages });
});

app.post('/messages', function (req, res, next) {
  messages.push({ user: req.body.user, message: req.body.message, time: new Date() });
  res.status(200).json({ messages: messages });
});

app.listen(3001);

// app.listen(3001, () => {
//   console.log(`Buller: $(port)`)
// })
