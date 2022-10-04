const mongoose = require('mongoose')
const Product = require("../model/product")

const getAllProduct = async(req,res)=>{
    try{
        const products = await Product.find({})
        res.status(200).json(products)
    }catch(error){
        res.status(500).json({msg:error.message})
    }
} 

const createProduct = async(req,res)=>{
    try{
        console.log(req.body)
        const product = await Product.create(req.body)
        res.status(201).json({product})
    }catch(error){  
        res.status(500).json({msg:error.message})
    }
}

const removeProduct = async(req,res)=>{
    try{
        const product = await Product.remove({_id:req.params.id})
    }catch(error){  
        res.status(500).json({msg:error.message})
    }
}

const updateProduct = async(req,res)=>{
    try{
        console.log(req.body)
         Product.findByIdAndUpdate({_id:req.params.id},req.body,(err,result)=>{
            if(!err){
                res.status(200).send()
            }
        })
    }catch(error){
        res.status(500).json({msg:error.message})
    }
}

module.exports = {
    getAllProduct,createProduct, removeProduct,updateProduct
}