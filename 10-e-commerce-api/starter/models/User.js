const validator= require('validator')
const mongoose=require('mongoose')

const UserSchema= new mongoose.Schema({
   name:{
     type:String,
     required:[true,'please provide name'],
     minLength:3,
     maxLength:50
   },
   email:{
    type:String,
    required:[true,'please provide email'],
    validate:{
        validator:validator.isEmail,
       message:'please provide validate email'
    }
},
password:{
    type:String,
    required:[true,'please provide password'],
    minLength:6
},
 role:{
     type:String,
      enum:['admin','user'],
      default:'user'}
 })


 module.exports = mongoose.model('User',UserSchema)