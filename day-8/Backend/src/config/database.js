// for writing code for connecting DB to the server
const app = require("express");
const mongoose = require("mongoose");

function connectToDB() {
  // pass URI for connecting server to the DB
  mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Connected to DB");
  });
}

module.exports = connectToDB;
