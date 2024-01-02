const express = require('express')
const bodyParser=require('body-parser')
const app=express()
const port=6500

app.use(bodyParser.json())

// app.get('/',function(req,res){
//     res.send("Hello From gand fattika server")
// })

app.post('/',function(req,res){
    console.log(req.headers)
    console.log(req.headers.authorization)
    console.log(req.body)
    res.send("Hello From gand fattika server")
})



app.listen(port,function(){
    console.log(`Welcome to My Server gandfatika${port}`)
})

//go through later (pending)