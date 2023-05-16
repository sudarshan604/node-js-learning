const Task=require('../models/task')
const asyncWrapper=require('../middleware/asyncs')

const getAllTasks= async(req,res)=>{
       try{
          const task=await Task.find({})
           res.status(200).json({task,amount:task.length})
          //  res.status(200)
          //  .json({success:true,data:{task,nbHits:task.length}})
          //  res.status(200)
          //  .json({status:'success',data:{task,nbHits:task.length}})
          }
            catch{
               res.status(500).json({msg:error})
            }
}



const createTask=async(req,res)=>{
   try{
     const task = await Task.create(req.body)
      res.status(201).json({task})
   }
   catch(error){
      res.status(500).json({msg:error})
   }

     }



const getTask=async(req,res)=>{
     try{
      const {id:taskID}=req.params
      const task=await Task.findOne({_id:taskID})
     if(!task){
           return res.status(404).json({msg:`No task with id:${taskID}`})
     }

     res.status(200).json({task})
     
}
    catch(error){
     res.status(500).json({msg:error})
    } 

     
     res.json({id:req.params.id})
     
}


const updateTask=async(req,res)=>{
 try{
  const {id:taskID}=req.params
  const task=await Task.findOneAndUpdate({_id:taskID},req.body,{
     new:true,
     runValidators:true
  })


  if(!task){
  return res.status(404).json({msg:`no task with id:${taskID}`})      
}

  res.status(200).json({id:taskID,data:req.body})

 } 
 catch(err){

 }

}



const deleteTask=async(req,res)=>{ 
     try{
          const {id:taskID}=req.params
          const task=await Task.findOneAndDelete({_id:taskID})
      if(!task){
          return res.status(404).json({msg:`No task with id:${taskID}`})
      }
     res.status(200).json({task})
     // res.status(200).send()
     // res.status(200).json({task:null,status:'success'})
     
       }
       catch(err){
          res.status(400).json({msg:err})
       }
}







module.exports={
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}