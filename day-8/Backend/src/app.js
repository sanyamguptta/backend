// for creating server

const express = require('express')
const app = express();
const userModel = require('./models/notes.model');
// for accepting cross origin request
const cors = require('cors')

// middleware for readinf data of req.body
app.use(express.json());
// for server to start accepting cors origin request, we will sue middleware as cors
app.use(cors)

// APIS
// POST 
app.post('/api/notes', async (req, res) => {
    //
    const {title, description} = req.body;

    // creating note with data recieved from req.body at Mumbai's Cluster
    const note = await userModel.create({
        title,
        description
    })

    // sending response after creating note
    res.status(201).json({
        message: 'Note is created',
        note
    })
})

// GET -> this api is used to fetch all notes from the mongoDB & send them in response
app.get('/api/notes', async (req, res) => {

    // find() -: this method is used to fetch all notes from the DB
    // .find() always returns data as array of object
    const notes = await userModel.find();

    // sending back response after fetching all notes data
    res.status(200).json({
        message: "Notes are fetched successfully!",
        notes
    })
})

// DELETE -> /api/notes/:id
app.delete('/api/notes/:id', async (req, res) => {

    // deleting note through id receiving from req.body
    const id = req.params.id;
    console.log(id)

    // deleting note with id received from req.params.id
    await userModel.findByIdAndDelete(id)

    // sending back response after deleting note with id (coming from req.params.id)
    res.status(200).json({
        message: "Note deleted successfully!"
    })

})


// PATCH: used to update
app.patch('/api/notes/:id', async (req, res) => {

  // updating note through id received from req.body
  const id = req.params.id;
  // destructuring data 
  const { description } = req.body;

  // updating note data 
  await userModel.findByIdAndUpdate(id, {
    description,
  });

  // sending response after updating note
  res.status(200).json({
    message: "Note updated successfully!",
  });

})

module.exports = app; 