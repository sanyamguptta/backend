const express = require('express');
const app = express();

app.use(express.json())

// we will push each new note in this array
// each object of array is a note
const notes = [];

// creating POST method api
app.post('/', (req, res) => {
  // receiving notes data from req.body
  const note = req.body;
  // pushing received note data from client in notes array 
  // OR, creating new note at server side
  notes.push(note);
  console.log(notes)``

  // sending back response after creating note
  res.send('note created!') 
})
 
// creating GET method api
// displaying all notes stored at server side
app.get('/', (req, res) => {
    res.send(notes)
})

app.get("/about", (req, res) => {
  res.send("This is about page buddy");
});

// jb server start hogya ho and server is ready to listen user's request 
// then this callback runs
app.listen(3000, () => {
    console.log("Server is listening at port 3000");

});