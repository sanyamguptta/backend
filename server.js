// server ko start krna
// DB se connect krna 

// for accessing value of variables made under .env file
require.dotenv.config()
const connecttoDB = require('./src/cofig/database')
const mongoose = require('mongoose')
const app = require('./src/app')

// connecting DB
connecttoDB();


app.listen(3000, () => {
  console.log("Server is listening at port 3000");
});