require('dotenv').config ()
require('express-async-errors') //no need to add try catch in all controller


//express
const express= require('express')
const app=express()

//rest of the packages
const morgan=require('morgan')
const cookieParser=require('cookie-parser')
const fileUpload=require('express-fileupload')


//database
const connectDB=require('./db/connect')


//routers

const authRouter=require('./routes/authRoutes')
const userRouter=require('./routes/userRoutes')
const ProductRouter=require('./routes/productRoutes')
const reviewRouter=require('./routes/reviewRoute')
const orderRouter=require('./routes/orderRoutes')

//middleware
const notFoundMiddleWare=require('./middleware/not-found')
const errorHandlerMiddleWare=require('./middleware/error-handler')


app.use(morgan('tiny'))
app.use(express.json()) //middlware -> to access json data in body
app.use(cookieParser(process.env.JWT_SECRET)) //to access cookie i


app.use(express.static('./public')) //showing folder public like on website
app.use(fileUpload())


app.get('/',(req,res)=>{
     res.send('e-commerce api')
})


app.get('/api/v1',(req,res)=>{
    console.log(req.signedCookies)
    res.send('ec')
})






app.use('/api/v1/auth',authRouter)
app.use('/api/v1/users',userRouter)
app.use('/api/v1/products',ProductRouter)
app.use('/api/v1/reviews',reviewRouter)
app.use('/api/v1/orders', orderRouter)
app.use(notFoundMiddleWare)
app.use(errorHandlerMiddleWare)




const port= process.env.PORT || 5000

const start=async ()=>{
    try{
        

        await connectDB(process.env.MONGO_URI)

    app.listen(port,()=>{
        console.log(`Server is listening on port ${port}...`)
    })
}catch(error){
  console.log(error)
}
}

start()