const User=require('../models/User')
const {StatusCodes}=require('http-status-codes')
const {createTokenUser,attachCookiesToResponse,checkPermissions}=require('../utils')
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
 
 checkPermissions(req.user,user._id)

  res.status(StatusCodes.OK).send({user})


}

const showCurrentUser= async (req,res)=>{
   res.status(StatusCodes.OK).json({user:req.user})
}

//
// const updateUser=async(req,res)=>{
  
//     const {name,email}=req.body

//     if(!name || !email){
//           throw new CustomError.BadRequestError('Please Provide both value')
//     }
//   const user=await User.findOneAndUpdate({_id:req.user.userId},{name,email})
  
  
//   const tokenUser = createTokenUser(user)
  
//   attachCookiesToResponse({res,tokenUser})

//   res.status(201).json({user:tokenUser})
// }

//update user with user.save()

const updateUser=async(req,res)=>{
  
    const {name,email}=req.body

    if(!name || !email){
          throw new CustomError.BadRequestError('Please Provide both value')
    }
  const user=await User.findOne({_id:req.user.userId})
  
  
  user.email=email
  user.name=name
  
  await user.save()

  const tokenUser = createTokenUser(user)
  
  attachCookiesToResponse({res,tokenUser})

  res.status(201).json({user:tokenUser})
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
 
await user.save()  //by using this method it invoke the preSave hooks


 res.status(StatusCodes.OK).json({msg:"success ! password updated"})
}

module.exports={
    getAllUsers,
    getSingleUser,
    showCurrentUser,
    updateUser,
    updateUserPassword
}