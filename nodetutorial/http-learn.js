const http=require('http')

const server=http.createServer((req,res)=>{
  if(req.url==='/')
  {
    res.end('welcome to the Home page')
  }
 if(req.url==='/about')
  {
     res.end('welcome to about page')
  }
 res.end(`<h1>Oops page not found</h1>
   <a href="/">go back to home</a> 
 `)

})

server.listen(5000)

