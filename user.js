const mongoose = require('mongoose')

const uri = 'mongodb://localhost/contactForm'

mongoose.connection.on('connected',()=>{
    console.log("database connected")
})

mongoose.connection.on('error',(err)=>{
    console.log("err connecting",err)
})

mongoose.connect(uri,{
    useNewUrlParser:true,
    useUnifiedTopology: true
})

let userSchema = new mongoose.Schema({
    name:String,
    number : String
})
module.exports = mongoose.model("user",userSchema)
