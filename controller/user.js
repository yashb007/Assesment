const mongoose = require('mongoose')
const User = mongoose.model("User")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const crypto = require('crypto')
const nodemailer = require('nodemailer')
const sendgridTransport = require('nodemailer-sendgrid-transport');
const user = require('../models/user');


const transporter = nodemailer.createTransport(sendgridTransport({
    auth:{
        api_key:"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"
    }
}))


exports.signup = (req,res) =>{
    const {first_name,last_name,email,password} = req.body 
    if(!email || !password || !first_name || !last_name) {
     res.status(422).json({error:"please add all the fields"})
     return
    }
   
    
    if(password.length < 6){
        return res.json({error : "Password must be of length 6 or more"})
    }

   user.findOne({email}).then(us => {
       console.log(us)
       if(us){
        return res.json({error  : "This email is already registered"})
       }

       bcrypt.hash(password,12)
       .then(hashedpassword=>{
             const user = new User({
               first_name,
               last_name,
               email,
               password : hashedpassword
             })
     

              user.save()
              .then(user=>{
                  transporter.sendMail({
                      to:`${user.first_name} <${user.email}>`,
                      from : "yyashpal_be18@thapar.edu",
                      subject:"signup success",
                      html:"<h1>welcome to virtual Police station</h1>"
                  }).then(() => {
                    console.log("sent")
                
                  res.json({message:"saved successfully"})
                  })
              })
              .catch(err=>{
                  console.log(err)
              })
        })
    .catch(err=>{
      console.log(err)
    })


   })
}

exports.signin = (req,res)=>{
    const {email,password} = req.body
    if(!email || !password){
       return res.status(422).json({error:"please add email or password"})
    }
    User.findOne({email:email})
    .then(savedUser=>{
        if(!savedUser){
           return res.status(422).json({error:"Invalid Email or password"})
        }
        bcrypt.compare(password,savedUser.password)
        .then(doMatch=>{
            if(doMatch){
               const token = jwt.sign({_id:savedUser._id},'software')
            
            res.cookie("token", token, {expire : new Date() +9999})
               res.json({token,savedUser})
            }
            else{
                return res.status(422).json({error:"Invalid Email or password"})
            }
        })
        .catch(err=>{
            console.log(err)
        })
    })
}


exports.signout = (req,res)=>{
    res.clearCookie("token")
    res.send({ message : "User signout Successfully"})
}


exports.forget = (req,res)=>{
    crypto.randomBytes(32,(err,buffer)=>{
        if(err){
            console.log(err)
        }
        const token = buffer.toString("hex")
        User.findOne({email:req.body.email})
        .then(user=>{
            if(!user){
                return res.status(422).json({error:"User dont exists with that email"})
            }
            user.resetToken = token
            user.expireToken = Date.now() + 3600000
            user.save().then((result)=>{
                transporter.sendMail({
                 to:`${user.name} <${user.email}>`,
                 from:"yyashpal_be18@thapar.edu",
                    subject:"password reset",
                    html:`
                    <p>You requested for password reset</p>
                    <h5>click in this <a href="http://localhost:3000/reset/${token}">link</a> to reset password</h5>
                    `
                })
                res.json({message:"check your email"})
            })

        })
    })
}

exports.updatepassword = (req,res)=> {
    const newPassword = req.body.password
    const sentToken = req.body.token
    User.findOne({resetToken:sentToken,expireToken:{$gt:Date.now()}})
    .then(user=>{
        if(!user){
            return res.status(422).json({error:"Try again session expired"})
        }
        bcrypt.hash(newPassword,12).then(hashedpassword=>{
           user.password = hashedpassword
           user.resetToken = undefined
           user.expireToken = undefined
           user.save().then((saveduser)=>{
               res.json({message:"password updated success"})
           })
        })
    }).catch(err=>{
        console.log(err)
    })
}