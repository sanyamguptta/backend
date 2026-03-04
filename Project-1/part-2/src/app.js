// for creating server
const express = require('express')
// 
const cookieParser = require('cookie-parser')
// requiring allRoutes from routes folder
const authRouter = require('./routes/auth.routes');
const postRouter = require('./routes/post.routes')

const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(cookieParser()) // using cookie-parser as middleware

// using this prefix for all allRouters routes
app.use('/api/auth', authRouter);
app.use('/api/posts', postRouter)


module.exports = app;
