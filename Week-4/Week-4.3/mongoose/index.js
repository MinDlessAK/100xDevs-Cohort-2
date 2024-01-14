const mongoose = require('mongoose')

   const username="akash"
   const password= "12345"


mongoose.connect("mongodb+srv://akash007:rUALKxScojWSwAc2@cluster0.caaivkb.mongodb.net/")

const userSchema=new mongoose.Schema({
    username:String,
    password:String
})
const newUsers=mongoose.model('newUsers',userSchema)


//create method
// newUsers.create({username,password})


//read method
console.log(newUsers.find({
    username:"akash"
}))


newUsers.findOne({
    username:"akash"
})

newUsers.findById('1')

// newUsers.updateOne({"username":"akash"},{$push:{age:78}})


// newUsers.deleteOne({
//     username:"akash"
// })
