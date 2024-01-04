/*
const express = require('express')
const bodyParser=require('body-parser')

const app = express();


app.use(bodyParser.json())

const users=[{
    name:"akash",
    kidney:[{
        healthy:false
    }]
}]

app.get('/', function (req, res) {
   let akashkidneys= users[0].kidney
   let nameOfKidneyContractor=users[0].name
   let numberOfkidney=akashkidneys.length
   let numberOfHealthykidney=0
      for(let i=0;i<akashkidneys.length;i++){
        if(akashkidneys[i].healthy){
          numberOfHealthykidney=numberOfHealthykidney+1
        }
      }
     let numberOfUnHealthykidney=numberOfkidney-numberOfHealthykidney;
    
     res.json({
        nameOfKidneyContractor,
        numberOfkidney,
        numberOfHealthykidney,
        numberOfUnHealthykidney
     }
     )
})


app.post('/',function(req,res){
    const isHealthy=req.body.isHealthy

    users[0].kidney.push({
        healthy: isHealthy
    })

    res.json({
        "msg":"Done"
    })
})

app.put('/',function(req,res){

    for(let i=0;i<users[0].kidney.length;i++){
           users[0].kidney[i].healthy=true
      }
      
     res.json({
        "msg":"done"
     })
})


app.delete('/',function(req,res){
    let newKidney=[]
    for(let i=0;i<users[0].kidney.length;i++){
       if(users[0].kidney[i].healthy){
          newKidney.push({
            healthy:true
          })
       }
   }
   users[0].kidney=newKidney
   
  res.json({
     "msg":"done"
  })
})



app.listen(2929)
*/






















const express = require('express')
const bodyParser=require('body-parser')
const app=express()
app.use(bodyParser.json())

let Users=[{
  name:'Shubham',
  kidney:[{
     healthy:false
  }]

}]

app.get('/',(req,res)=>{
let ShubhamKidney=Users[0].kidney
let NameOfKidneyHolder=Users[0].name
let TotalNumberOfKidneys=ShubhamKidney.length
let  NumberOfHealthykidney=0

for(i=0;i<ShubhamKidney.length;i++){
  if(Users[0].kidney[i].healthy){
     NumberOfHealthykidney=NumberOfHealthykidney+1;
  }
}

let NumberOfUnHealthykidney=TotalNumberOfKidneys-NumberOfHealthykidney;

  res.json({
    NameOfKidneyHolder,
    TotalNumberOfKidneys,
    NumberOfHealthykidney,
    NumberOfUnHealthykidney
  })
    
})

app.post('/',(req,res)=>{
  let IsHealthy=req.body.IsHealthy
  Users[0].kidney.push({
    healthy:IsHealthy
  })
   res.json({
    "msg":"Post"
   })
})

app.put('/',(req,res)=>{
    for(let i=0;i<Users[0].kidney.length;i++){
        Users[0].kidney[i].healthy=true
   }
   res.json({
    "msg":"Put"
   })
})

app.delete('/',(req,res)=>{
  let newArray=[]
  for(let i=0;i<Users[0].kidney.length;i++){
      if(Users[0].kidney[i].healthy){
         newArray.push({
          healthy:true
        })
      }
  }
   Users[0].kidney=newArray
  res.json({
    "msg":"delete"
  })
})

app.listen(9999)


