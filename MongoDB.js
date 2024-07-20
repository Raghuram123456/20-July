const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/Signup")
.then(()=>{
    console.log("mongodb connected")
})
.catch(()=>{
    console.log('failed');
})
const newSchema = new mongoose.Schema({
    _id: {
        type: Number,
        default: () => ++counter, // Increment the counter and use it as the default value for _id
      },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const collection = mongoose.model("Users",newSchema)

module.exports=collection
