// for creating server

const express = require('express')
const app = express();
const userModel = require('./models/notes.model');

// middleware for readinf data of req.body
app.use(express.json());

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



module.exports = app; 