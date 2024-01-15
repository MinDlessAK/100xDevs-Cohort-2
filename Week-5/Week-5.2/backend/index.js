const express=require('express')
const {createTodo,updateTodo}=require('./types')

const app=express()

app.use(express.json());


app.post('/todo',function(req,res){
  const createPayload=req.body
  const parsadPayload=createTodo.safeParse(createPayload)
  if(!parsadPayload.success){
    res.status(411).json({
        msg:"you sent the wrong input"
    })
      return;
  }
})

app.get('/todos',function(req,res){
    
})

app.put('/completed',function(req,res){
    const updatePayload=req.body
    const parsadPayload=updateTodo.safeParse(updatePayload)
    if(!parsadPayload.success){
      res.status(411).json({
          msg:"you sent the wrong input"
      })
        return;
    }
})

app.listen(3000)
