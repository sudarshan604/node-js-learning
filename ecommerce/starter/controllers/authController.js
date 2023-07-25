const User=require('../models/User')
const {StatusCodes}=require('http-status-codes')
const CustomError=require('../errors')
const {attachCookiesToResponse}=require('../utils')

const register=async(req,res)=>{
  const {email,name,password}=req.body

  const emailAlreadyExit=await User.findOne({email})

 if(emailAlreadyExit){
     throw new CustomError.BadRequestError('email already exit')
 }

//first register user is an admin
const isFirstAccount= (await User.countDocuments({}))===0

const role=isFirstAccount?'admin':'user'



  const user=  await User.create({name,email,password,role})
  const tokenUser={name:user.name,userId:user._id,role:user.role}

//   const token=jwt.sign(tokenUser,'jwtSecret',{expiresIn:'1d'})
// const token=createJWT({payload:tokenUser})

// const oneDay=1000*60*60*24

// res.cookie('token',token,{
//     httpOnly:true,
//     expires:new Date(Date.now()+oneDay)
// })

attachCookiesToResponse({res,user:tokenUser})
 res.status(StatusCodes.CREATED).json({user:tokenUser})

}


const login=async(req,res)=>{
  
   const {email,password}=req.body
   
   if(!email || !password){
    throw new CustomError.BadRequestError('please provide email and password')
   }

 const user=await User.findOne({email})

 if(!user){
    throw  new CustomError.UnauthenticatedError('Invalid Credentials')
 }
const isPasswordCorrect=await user.comparedPassword(password)

if(!isPasswordCorrect){
    throw  new CustomError.UnauthenticatedError('Invalid Credentials')
}

const tokenUser={name:user.name,userId:user._id,role:user.role}
attachCookiesToResponse({res,user:tokenUser})
 res.status(StatusCodes.CREATED).json({user:tokenUser})



}

const logout=async(req,res)=>{
   res.cookie('token','logout',{
    httpOnly:true,
    expires:new Date(Date.now())
   })

   res.status(StatusCodes.OK).json({msg:'user logged out'})
}


module.exports={
    register,
    logout,
    login
}