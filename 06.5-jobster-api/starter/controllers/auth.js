const User=require('../models/User')
const {StatusCodes}=require('http-status-codes')
const {BadRequestError,UnauthenticatedError}=require('../errors')
// const bcrypt=require('bcryptjs') //for hashing the password 

const register=async(req,res)=>{
  // // instead of this we use mongoose moddlewar in this project for hashing
  // const {name,email,password}=req.body
  // const salt=await bcrypt.genSalt(10) //gentSalt() give random bite
  // const hashPassword=await bcrypt.hash(password,salt)
  // const tempUser={name,email,password}
  const user= await User.create({...req.body})

  const token=user.createJWT()

  res.status(StatusCodes.CREATED).send({ user:{name:user.name}, token}) 

}

const login=async(req,res)=>{

 const {email,password}=req.body

if(!email || !password){
   throw new BadRequestError('please provide email and password')
}
const user=await User.findOne({email})

if(!user){
   throw new UnauthenticatedError('invalid credentials')
}

const isPasswordCorrect =await user.comparedPassword(password)

if(!isPasswordCorrect){
  throw new UnauthenticatedError('invalid credentials')
}

 const token=user.createJWT()

 res.status(StatusCodes.OK).json({user:{name:user.name},token})

}

module.exports={
  register,
  login
}