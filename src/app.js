// for creating server
// for configuring server
const express = require('express');
const noteModel = require('./models/notes.model');
const app = express();

// middleware for readind data of rewq.body
app.use(express.json())

// POST /notes
// req.body -> data{title, description} is coming in req.body
app.post('/notes', async (req, res) => { 
    // notes data coming in req.body
    // destructing that data
    const {title, description} = req.body;

    // creating note with the data & stores data at mumbai's cluste  r
    const note = await noteModel.create({
        title,  
        description
    })

    // sending back response after creating note with data which is received in req.body 
    res.status(201).json({
        message: 'Note created successfully!',
        note
    })

})


// GET : fetch all notes data
app.get('/notes', (req, res) => {
    // find() -> this method is used to find all notes from the DB (in array of object)
    const notes = noteModel.find();

    res.status(200).json({
        message: "Notes fetched successfully!",
        notes
    })
})


module.exports = app;