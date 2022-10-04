const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type:String
    },
    brand:{
        type:String
    },
    price:{
        type:Number
    }
})

module.exports = mongoose.model("product",productSchema)