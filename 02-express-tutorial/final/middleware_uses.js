

// const logger=(req,res,next)=>{
//   const method=req.method
//   const url=req.url
//   const time=new Date().getFullYear()
//   console.log(method,url,time)
//   next()
//   //  res.send('testing')
// }

// app.use(logger)//it apply in all route remember order matter

app.use([logger,authorize]) //multiple middleware
//they will be call in order first logger then authorized


// app.use('/api')//it apply on only route after /api



app.get('/',(req,res)=>{
     res.send('home')
})

app.get('/about',(req,res)=>{
    res.send('about')
})

