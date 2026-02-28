// for starting server
const app = require("./src/app");

const notes = [];

// POST /notes -> for creating resource at server side
app.post("/notes", (req, res) => {
  // pushing data receieved from req.body into notes array
  notes.push(req.body);
  console.log(notes);

  // sending back response
  res.send("Note created!");
});

// GET /notes -> for fetching all notes at client side from server side
app.get("/notes", (req, res) => {
  // sending back notes as response for fetching data
  res.send(notes);
});

// PATCH /notes -> for updating existing resource present at server side
app.patch("/notes/:idx", (req, res) => {
  // updating description throught updated data received in req.body
  notes[req.params.idx].description = req.body.description;

  // sending back response
  res.send("Note updated successfully!");
});

// DELETE /notes/delete/:idx -> for deleting existing note from notes array
app.delete("/notes/delete/:idx", (req, res) => {
  // deleting note through req.params
  delete notes[req.params.idx];

  // sening back response
  res.send("note deleted successfully!");
});


// listening server at port 3000, and executing callback
app.listen(3000, () => {
  console.log("Server is listening at port 3000");
});
