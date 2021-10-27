const express = require('express')
const { check } = require('express-validator');
const { validarCampos } = require("../middleweare/validar-campos");
const User = require('../models/user.model')
const {esEmailValido, existeEmail} = require('../helpers/db-validators');
const router = express.Router()


router.post('/signup',



(req,res)=>{
    User.findOne({email:req.body.email},(err,user)=>{
        if(err){
            console.log(err)
            res.json(err)
        }else{
            if(user==null){
                const user = User({
                    email:req.body.email,
                    password:req.body.password
                })
                user.save()
                .then((err)=>{
                    if(err){
                        console.log(err)
                        res.json(err)
                    }else{
                        console.log(user)
                        res.json(user)
                    }
                    
                })
            }else{

            res.json({
                message:'email is not avilable'
            })   
            }
        }
    })
     
})

router.post('/signin',

   (req,res)=>{
    User.findOne({email:req.body.email,password:req.body.password},(err,user)=>{
        if(err){
            console.log(err)
            res.json(err)
        }else{
            res.json(user)  
        }
    })
})
module.exports = router