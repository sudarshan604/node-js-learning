
const {CustomAPIError}=require('../errors/custom-errors')

const errorHandlerMiddleWare=(err,req,res,next)=>{
    //  return res.status(500).json({msg:err})
  if(err instanceof CustomAPIError){
     return res.status(err.statusCode.json({msg:err.message}))
  }
    
    console.log(err)

    // return res.status(500).json({msg:`something went wrong try again later`})
 return res.status(err.status).json({msg:err.message})

}

module.exports=errorHandlerMiddleWare