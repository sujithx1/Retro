

const mongoose=require('mongoose')
const adminRoute=require('../routes/adminRoute')

const adminSchema=new mongoose.Schema({

    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model('admin',adminSchema)