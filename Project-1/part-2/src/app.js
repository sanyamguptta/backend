// for creating server
const express = require('express')
// 
const cookieParser = require('cookie-parser')

const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(cookieParser()) // using cookie-parser as middleware
app.use(express.urlencoded({ extended: true }));

// requiring allRoutes from routes folder
const authRouter = require('./routes/auth.routes');
const postRouter = require('./routes/post.routes')
const userRouter = require('./routes/user.routes')

// using this prefix for all allRouters routes
app.use('/api/auth', authRouter);
app.use('/api/posts', postRouter)
app.use('/api/users', userRouter);


module.exports = app;
