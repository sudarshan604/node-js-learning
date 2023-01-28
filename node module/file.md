1.//make http request
const http=require("http")
const req = http.request("http://www.google.com",(res)=>{

           res.on('data',(data)=>{
              console.log(`Data chunk:${data}`)
           })
      res.on('end',()=>{
         console.log("no more Data")
      })
   })

 if we dont do req.end() then no output 

 for secure we can do const http=require("http")

we can also get direct request from destrucuring lieke

const {request}=require("http")


we can also get,get like {get}=require("http")

for get we dont have to do .end because it dont have to response



2.why use modules

















