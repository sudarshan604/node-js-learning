const http=require("http")

const req = http.request("http://www.google.com",(res)=>{

           res.on('data',(data)=>{
              console.log(`Data chunk:${data}`)
           })
      res.on('end',()=>{
         console.log("no more Data")
      })
   })

  //  req.end()