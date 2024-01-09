const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json())

const jwtPassword = "123456";

const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];


function userExists(username, password){
  let UserExists=false
  for(i=0;i<ALL_USERS.length;i++){
    if( ALL_USERS[i].username==username && ALL_USERS[i].password==password){
       UserExists=true;  
    }
  }
  return UserExists
}

app.post("/signin", function (req,res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username
    res.json(ALL_USERS.filter(function(value){
        if(value.username==username ){
            return false
        }
        else{
            return true
        }
    }))
  }catch(err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }

});

app.listen(3000)


/*
const mongoose = require ('mongoose');

//link
mongoose.connect("mongodb+srv://akash007:rUALKxScojWSwAc2@cluster0.caaivkb.mongodb.net/")

const User=mongoose.model('Users',{ name: String , email: String , password: String})

const user=new User({ name:'Akash Mishra' , email:'akash@gmail.com',password:"123456"})
user.save()
*/