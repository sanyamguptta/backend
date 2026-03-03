const mongoose = require('mongoose')

// creating schema for telling format of the data to the DB
const noteSchema = new mongoose.Schema({
    title: String,
    description: String
})

// creating model for performing CRUD operations 
const noteModel = mongoose.model("notes", noteSchema); 

module.exports = noteModel;