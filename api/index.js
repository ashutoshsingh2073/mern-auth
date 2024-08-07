import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/users.route.js';
dotenv.config();


const app = express();
 app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
 });
 
 mongoose
 .connect(process.env.MONGO).then(() => {
    console.log('connected to Mongodb');
})
.catch((err) =>{
    console.log(err);
});

app.use("/api/user", userRoutes);
