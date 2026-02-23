const express=require('express');
const dotenv=require('dotenv');
dotenv.config();
const {connectDB}=require('./config/db');
const User=require('./model/userSchema');

connectDB();

const app=express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('hhhhh');
});

console.log("POST route registered");
app.post('/create',async(req,res)=>{
    console.log("POST /create route hit");
    const {name}=req.body;
    const user=await User.create({name});
    res.json(user);
})
app.listen(3000,()=>{
    console.log("server is running ");
})