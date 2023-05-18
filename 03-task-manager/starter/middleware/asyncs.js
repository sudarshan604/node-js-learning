const asyncWrapper=(fn)=>{
  
 return async(req,res,next)=>{
     try{
         await fn(req,res,next)
     }
     catch(error){
         next(error) //middleware for error if not made then we use build in if not then we use what we made 
      }
  
    }
 }

module.exports=asyncWrapper