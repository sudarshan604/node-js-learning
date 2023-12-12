const User=require('../models/User')
const {StatusCodes}=require('http-status-codes')


const CustomError= require('../errors')

const {attachCookiesToResponse}=require('../utils')

const register=async(req,res)=>{

  const {email,name,password}=req.body

  const emailAlreadyExists=await User.findOne({email})


  if(emailAlreadyExists){

      throw new CustomError.BadRequestError('Email aready exists')
 }

//first registered user is an admin

const isFirstAccoutn= await User.countDocuments({})===0
const role=isFirstAccoutn?'admin':"user"


  const user= await User.create({name,email,password,role})

  const tokenUser={name:user.name,userId:user._id,role:user.role}
 

  attachCookiesToResponse({res,tokenUser})


  res.status(StatusCodes.CREATED).json({user:tokenUser})
       
}



const login=async(req,res)=>{
      res.send('login user')
}

const logout=async(req,res)=>{
   
    res.send('logout user')
}


module.exports={
   register,
   login,
   logout
}