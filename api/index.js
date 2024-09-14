import express from "express";
import dotenv from 'dotenv'
import cookieParser from "cookie-parser";
import cors from 'cors'
import authRouter from './routes/auth.route.js'
import todoRouter from './routes/todo.route.js'
const app = express();

dotenv.config();
app.use(express.json());
app.use(cookieParser())
app.use(cors())
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
app.listen(3000,()=>{
    console.log("Server running on port 3000")
})

