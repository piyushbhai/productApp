const express = require('express');
const router =express.Router();
const authenticate = require('../middleware/authenticate');
const conn = require('../db/conn');
// const jwt = require('jsonwebtoken');
const ProductsModel = require('../model/products');
// const bcrypt = require("bcryptjs");

// app.use(cors());
// const app = express()

// router.post('update-profile',authenticate, async function(req,res){
//     res.send("hiii")
// })

// router.post('/signup', authenticate ,async (req, res) => {
//     // console.log(req.body); return
//     const {name,email,password} = JSON.parse(req.body.data);
//     if(!name){
//       return res.status(422).json({status:422,msg:"please enter value"})   
//     }
//     // console.log(name); return
//     try{
//        const user = await AuthModel.findOne({email:email}) 
//        if(user){
//             return res.status(422).json({status:422,msg:"Username Already Exists."})   
//         }

//         const auth = new AuthModel({name,email,password});
//         const submit = await auth.save()
//         if(submit){
//             res.status(201).json({message:"User Registration successfully"});
//         }
//     }catch(err){
//         res.status(500).json({error:"Failed to signup."});
//     }
// })


// router.post('/signin', async (req, res) => {
//     try{
//         let token;
//         const {email,password} = JSON.parse(req.body.data);
//         if(!email || !password){
//             return res.status(400).json({error: "Please Enter Value"});
//         }    
        
//         const userLogin = await AuthModel.findOne({email:email});
//         if(userLogin){
//                 const isMatch = await bcrypt.compare(password,userLogin.password);            
//                 token = await userLogin.generateAuthToken();
                
//                 if(!isMatch){
//                     return res.status(400).json({status: "422",error:"Invalid Credentials."});                
//                 }else{
//                     // let totalLogincount = userLogin.is_firstlogin+1;
//                     // // console.log(totalLogincount);return
//                     // var update = { $set: { is_firstlogin:totalLogincount }};
//                     // await Auth.updateOne({_id:userLogin._id},update, function(err, res) {
//                     //     if (err) throw err;                
//                     // });   
//                     res.status(201).json({message:"Signin successful",usertoken:token,email:email,id:userLogin._id,name:userLogin.name});
//             }
//         }else{
//             return res.status(400).json({status: "422",error:"Invalid Credentials."});                
//         }
//     }catch(err){
//         // console.log(err);
//         res.status(500).json({error:err});
//     }
// });


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