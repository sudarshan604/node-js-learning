const express=require('express')
const app=express()
const tasks=require('./routes/task')
const connectDB=require('./db/connect')
require('dotenv').config()  //npm install dotenv for env value
const notFound=require('./middleware/notfound')







//middleware
app.use(express.static('./public')) //to load html css or static file
app.use(express.json()) //if we dont we use it then we dont have data in req.body

// app.use(notFound)


app.get('/hello',(req,res)=>{
  res.send('task manager app')
}) 



app.use('/api/v1/tasks',tasks)






// app.get('/api/v1/tasks') -get all the tasks
// app.post('/api/v1/tasks') -create a new task
// app.get('/api/v1/tasks/:id')-get single task
// app.patch('/api/v1/tasks/:id')-update task
// app.delete('/api/v1/tasks/:id')- delete task




const port=3000

const start=async()=>{
   try{
          await connectDB(process.env.MONGO_URI)
          app.listen(port,
            console.log(`server is listening`))
        }
  catch(error){

  }
}

start()

