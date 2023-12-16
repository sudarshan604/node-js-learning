const moongoose=require('mongoose')

const ReviewSchema= new moongoose.Schema({

  rating:{
    type:Number,
    min:1,
    max:5,
    require:[true,'Please provide rating']
  },
  title:{
     type:String,
     trim:true,
     require:[true,'Please provide review title'],
     maxLength:100
  },
  comment:{
      type:String,
      require:[true,'Please provide comment '],
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

ReviewSchema.index({product:1,user:1},{unique:true})


module.exports=moongoose.model('Review',ReviewSchema)