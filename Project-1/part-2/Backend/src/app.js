// for creating server
const express = require('express')
// 
const cookieParser = require('cookie-parser')
// requiring allRoutes from routes folder
const authRouter = require('./routes/auth.routes');
//
const cors = require('cors');

const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(cookieParser()) // using cookie-parser as middleware

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

// using this prefix for all allRouters routes
app.use('/api/auth', authRouter);


module.exports = app;
