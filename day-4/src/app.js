// for starting server
// for configuring server
const express = require('express')
const app = express();

// for reading data of req.body
// using app.use as middleware
app.use(express.json());

// exporting and using this fiile code in server.js file
module.exports = app;
