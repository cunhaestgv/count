//código

const express = require('express')
const app = express()
const number =0;

app.post('/', (req, res) => {
  number++;
  res.send("...");
})

app.get('/', (req, res) => {
  res.send(number.toString());
})

module.exports = app;
