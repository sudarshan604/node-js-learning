const {readFile, writeFile}=require('fs').promises


// const util=require('util')
// const readFilePromise=util.promisify(readFile)
// const writeFilePromise=util.promisify(writeFile)

const getText=(path)=>
{
     return new Promise((resolve,reject)=>{
         readFile(path,'utf-8',(err,data)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(data)
            }
         })
     })
}

// this is writing from predefine function

const start=async()=>{
    try{
        const first=await readFile('./content/first.txt','utf-8')
        const second=await readFile('./content/second.txt','utf-8')
        await writeFile('./content/async_file.txt',`This is Awesome :${first} ${second}`,{flag:'a'})
       

    // const first=await readFilePromise('./content/first.txt','utf-8')
    // const second=await readFilePromise('./content/second.txt','utf-8')
    // await writeFilePromise('./content/async_file.txt',`This is Awesome :${first} ${second}`)
   
    console.log(first,second)
    }
    catch(err){
         console.log(err)
    }
}



//this is another way of writing custom 




// getText('./content/first.txt').then(result=>{
//     console.log(result)
// }).catch(err=>console.log(err))




/*  ****************************************  */

// this is also another way of writing custom


// const start=async()=>{
//     try{
//     const first=await getText('./content/first.txt')
//     const second=await getText('./content/second.txt')
//     console.log(first,second)
//     }
//     catch(err){
//          console.log(err)
//     }
// }
start()