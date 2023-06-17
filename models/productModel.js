import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema({
    name:{type: String, required:true},
    rating:{type:Number, required:true},
    comment:{type: String, required:true}
})

const prouductSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Type.ObjectId,
        required:true,
        ref:'User'
    },
    name:{
        type:String,
        required:true
    },
    image:{ 
        type: String,
        required: true
    },
    brand:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },

    description:{
        type:String,
        required:true
    },

    reviews:[reviewSchema],

    rating:{
        type:Number,
        required:true
    },

    numReviews:{
        type:Number,
        required:true,
        default:0
    },
    price:{
        type: String,
        required:true
    },

    countInStock:{
        type:Number,
        required:true,
        default:0
    }

},{
    timestemps:true
})

const Product = mongoose.model('Product',productSchema);

export default Product;