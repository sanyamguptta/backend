// rquiring express
const express = require('express')
// creating express instance
const app = express();

// programming server to send response for sending request
app.get('/', (req, res) => {
    res.send('hello world');
})

app.get("/about", (req, res) => {
  res.send("This is about page");
});

// listening server at port 3000
app.listen(3000);