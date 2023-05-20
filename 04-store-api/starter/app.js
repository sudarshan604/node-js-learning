require('dotenv').config() //if we want to access the variable
require('express-async-errors')

//async errors
const express=require('express')
const app=express()

const connectDB=require('./db/connect')
const productRouter=require('./routes/products')


const notFoundMiddleWare=require('./middleware/not-found')
const errorHandlerMiddleware=require('./middleware/error-handler')
 
//middleware
app.use(express.json())


//routes
app.get('/',(req,res)=>{
   res.send(`<h1>store API</h1> <a href='/api/v1/products'>products route</a>`)
 })

app.use('/api/v1/products',productRouter)



//product route
app.use(notFoundMiddleWare)
app.use(errorHandlerMiddleware)

const port=process.env.PORT || 3000




const start=async()=>{
     try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`server is listening port ${port}`))
      }
      catch(err){
         console.log(err)
      }

    }

start()

























