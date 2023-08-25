const express = require('express');
const router =express.Router();
const authenticate = require('../middleware/authenticate');
const conn = require('../db/conn');
const ProductsModel = require('../model/products');


router.post('/get-products', async (req, res) => {
    const {type} = req.body;
    // console.log(type);
    try{
        let column;
        let sortby=-1;
        let products
        if(type==0){
            products = await ProductsModel.find().sort({_id:-1})
        }
        if(type==1){
            products = await ProductsModel.find().sort({price:1})
        }
        if(type==2){
            products = await ProductsModel.find().sort({price:-1})
        }
        // console.log(column);
        // console.log(sortby);
        
        // console.log(products);
        if(products){
            res.status(201).json({status:"201",products});
        }else{
            return res.status(400).json({status: "422",error:"No Product Available."});                
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error:err});
    }
});

router.post('/get-featured-products', async (req, res) => {
    try{
        const products = await ProductsModel.find({});
        if(products){
            res.status(201).json({status:"201",products});
        }else{
            return res.status(400).json({status: "422",error:"No Product Available."});                
        }
    }catch(err){
        // console.log(err);
        res.status(500).json({error:err});
    }
});

router.post('/get-product-details/:id', async (req, res) => {
    try{
        const products = await ProductsModel.find({"_id":req.params.id});
        if(products){
            res.status(201).json({status:"201",products});
        }else{
            return res.status(400).json({status: "422",error:"No Product Available."});                
        }
    }catch(err){
        // console.log(err);
        res.status(500).json({error:err});
    }
});




module.exports = router;