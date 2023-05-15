const mongoose = require("mongoose");



const connectionString = `mongodb://user200:1234@ac-amspevh-shard-00-00.aliayhp.mongodb.net:27017,ac-amspevh-shard-00-01.aliayhp.mongodb.net:27017,ac-amspevh-shard-00-02.aliayhp.mongodb.net:27017/nodelearn?ssl=true&replicaSet=atlas-fvxzuk-shard-0&authSource=admin&retryWrites=true&w=majority`;

const connectDB=(url)=>{
  return  mongoose.connect(url, { useNewUrlParser: true,useUnifiedTopology: true })
}

module.exports=connectDB



