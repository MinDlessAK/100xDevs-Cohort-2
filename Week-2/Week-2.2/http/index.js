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

// When to Use Each

// GET: Use when you want to retrieve data from the server, and the request has no side effects. It's suitable for safe and idempotent operations.
// POST: Use when you want to submit data to the server, especially when the operation has side effects (e.g., creating a new resource on the server). It's suitable for non-idempotent operations.

// In summary, the choice between GET and POST depends on the purpose of the request and the type of operation you are performing.


//go through later (pending)
//make todo list and store data 