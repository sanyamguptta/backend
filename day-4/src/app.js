// for starting server
// for configuring server
const express = require('express')
const app = express();

app.use(express.json());

module.exports = app;