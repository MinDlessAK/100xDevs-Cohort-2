const mongoose = require('mongoose')
const express =require('express')

const app=express()

app.use(express.json())

mongoose.connect("mongodb+srv://akash007:rUALKxScojWSwAc2@cluster0.caaivkb.mongodb.net/")

const userSchema=new mongoose.Schema({
    username:String,
    password:String
})

const User=mongoose.model('Users',userSchema)


app.get('/',(req,res)=>{
    username=req.body.username
    password=req.body.password
    User.create({username,password})
   res.json({username,password})
})


app.listen(3000)


