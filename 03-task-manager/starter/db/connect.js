const mongoose=require('mongoose')


const connectionString='mongodb+srv://sudarshan:1234@cluster0.osp6cca.mongodb.net/?retryWrites=true&w=majority'


mongoose
.connect(connectionString).then(()=>console.log('CONNECTED TO THE DB....'))
.catch(err=>console.log(err))