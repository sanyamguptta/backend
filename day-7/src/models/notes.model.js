const mongoose = require('mongoose')

// creating scehma for note
const noteSchema = new mongoose.Schema({
    // format of data
    title: String,
    description: String
})

//creating model for performing CRUD operations
// now, notes data will be stored in notes collection
const noteModel = mongoose.model("notes", noteSchema); // with collectionName(string) and schemaName

module.exports = noteModel;