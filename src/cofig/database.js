const mongoose = require('mongoose')

function connecttoDB() {
    // accessing mongo_uri variable of .env file 
    mongoose.connect(process.env.MONGO_URI)
    .then( () => {
        console.log('Connected to DB')
    })
}

module.exports = connecttoDB;

