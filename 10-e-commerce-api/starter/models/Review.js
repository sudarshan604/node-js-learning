const moongoose=require('mongoose')

const ReviewSchema= new moongoose.Schema({

  rating:{
    type:Number,
    require:true
  },
  title:{
     type:String,
     require:true
  },
  comment:{
      type:String,
      require:true
  },
  user:{
     type:moongoose.Types.ObjectId,
    ref:"User",
    require:true
    },
    product:{
      type:moongoose.Types.ObjectId,
      ref:'Product',
      require:true,
    }

},{
  timestamps:true
})

module.exports=moongoose.model('Review',ReviewSchema)