const {readFileSync,writeFileSync}=require('fs');

const first=readFileSync('./content/first.txt','utf-8')
const second=readFileSync('./content/second.txt','utf-8')

writeFileSync('./content/result.txt',`here is result:${first} ${second}`,{flag:'a'}) //flag a means append this in the file







