
const jwt=require('jsonwebtoken')
const CustomAPIError=require('../errors/custom-error')
const {UnauthenticatedError}=require('../errors')
const authenticationMiddleWare=async(req,res,next)=>{
    const authHeader=req.headers.authorization

    if(!authHeader || !authHeader.startsWith('Bearer')){
        throw new UnauthenticatedError('No token provided')//401 authentication error
   }
   const token=authHeader.split(' ')[1]

 try{
    const decode=jwt.verify(token,process.env.JWT_SECRET)
    const {id,username}=decode
   req.user={id,username}    
   next()
}
        catch(err){
    throw new UnauthenticatedError('No authorized access to this route')
  }


}

module.exports=authenticationMiddleWare