// process -info about env where the program is being executed

/* Learn about Modules */

const names=require('./names')


const saHI=(name)=>{
    console.log(`hello there ${name}`)
}

saHI('sudarshan')
saHI(names.firstName)


