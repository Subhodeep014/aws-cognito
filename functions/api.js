import express from "express";
import dotenv from 'dotenv'
import cookieParser from "cookie-parser";
import cors from 'cors'
import authRouter from '../api/routes/auth.route.js'
import todoRouter from '../api/routes/todo.route.js'
import serverless from 'serverless-http';
const app = express();

dotenv.config();
app.use(express.json());
app.use(cookieParser())
// const allowedOrigin = 'https://stacktaskaws.netlify.app';
app.use(cors({
    origin: 'https://stacktaskaws.netlify.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  }));
app.use('/api/user', authRouter)
app.use('/api/todo', todoRouter)
app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server error';
    res.status(statusCode).json({
        success : false,
        statusCode,
        message
    })
})
module.exports.handler = serverless(app);
// app.listen(3000,()=>{
//     console.log("Server running on port 3000")
// })

