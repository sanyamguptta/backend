// for starting server
// for connecting serve to the DB

// installing dotenv pakg and requiring it for accessing values of variable of .env file 
require('dotenv').config()
const app = require('./src/app')
const connectToDB = require('./src/config/database');

connectToDB();

app.listen(3000, () => {
    console.log('Server is listening at port 3000');
})