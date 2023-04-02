const {readFile,writeFile}=require('fs')

 console.log('start')


readFile('./content/first.txt','utf8',(error,result)=>{
      if(error){
         return 
      }
  const first =result;

  readFile('./content/second.txt','utf8',(error,result)=>{
    if(error){
        return
    }
 const second=result

  writeFile('./content/async_file.txt',`hey there:${first} ${second}`,{flag:'a'},(err,result)=>{
     if(err){
         return
     }
  console.log('done with this task')

    })

  })

    })


console.log('starting new task')













