const User=require('../models/User')
const {StatusCodes}=require('http-status-codes')
const {createTokenUser,attachCookiesToResponse}=require('../utils')
const CustomError=require('../errors')


const getAllUsers=async(req,res)=>{

    const users= await User.find({role:'user'}).select('-password')
 


    res.status(StatusCodes.OK).send({users})
}


const getSingleUser=async (req,res)=>{

  const user= await User.findOne({_id:req.params.id}).select('-password')




  if(!user){
     throw new CustomError.NotFoundError(`No user with id:${req.params.id}`)
  }
  res.status(StatusCodes.OK).send({user})


}

const showCurrentUser= async (req,res)=>{
   res.status(StatusCodes.OK).json({user:req.user})
}

const updateUser=async(req,res)=>{
    const {name,email}=req.body
    console.log(req.body)
    if(!name || !email){
        throw new CustomError.BadRequestError('Please Provide both value')
    }
  const user=await User.findOneAndUpdate({_id:req.user.userId},{name,email})
  
  
  const tokenUser = createTokenUser(user)
  
  attachCookiesToResponse({res,tokenUser})

  res.status(201).json({tokenUser})
}

const updateUserPassword= async(req,res)=>{

   const {oldPassword,newPassword}=req.body 

if(!oldPassword || !newPassword){
     throw new CustomError.BadRequestError('Please Provide both value')
}

const user= await User.findOne({_id:req.user.userId})

const isPasswordCorrect= await user.comparePassword(oldPassword)

if(!isPasswordCorrect){
    throw new CustomError.UnauthenticatedError('Invalid credentials')
}

user.password=newPassword
 await user.save()

 res.status(StatusCodes.OK).json({msg:"success ! password updated"})
}

module.exports={
    getAllUsers,
    getSingleUser,
    showCurrentUser,
    updateUser,
    updateUserPassword
}