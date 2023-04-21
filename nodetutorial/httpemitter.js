const http=require('http')

const EventEmitter=require('events');

const customEmitter=new EventEmitter()  

customEmitter.on('response',(name,id)=>{
    console.log(`data received ${name} with id:${id}`)
})
customEmitter.on('response',()=>{
    console.log(`some other logic here`)
})

customEmitter.emit('response','john',34)

// const server=http.createServer((req,res)=>{
//      res.end('welcome')
// })


/*  ****************  */

//using event emitter api

const server=http.createServer()
//emits request event

//subscribe to it listen for it  / response it
server.on('request',(req,res)=>{
      res.end('welcome')
})

server.listen(5000)


























