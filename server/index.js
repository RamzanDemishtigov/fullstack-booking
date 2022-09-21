import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import auth from "./middleware/auth.js"
import usersRouter from "./routes/users.js"
import hotelsRouter from "./routes/hotels.js"
import roomsRouter from "./routes/rooms.js"

dotenv.config()
const app = express()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to database")
    } catch(err) {
        throw err;
    }
};

//middlewares
app.use(express.json())
app.use('/api/auth',auth)
app.use('/api/users',usersRouter)
app.use('/api/hotels',hotelsRouter)
app.use('/api/rooms',roomsRouter)
app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong"
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack
    })
})

app.listen(4000,()=>{
    connect()
    console.log(`Server is working on port 4000`)
})