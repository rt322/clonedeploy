import connectDB from "@/db";
import Usersoyo from "@/models/user-model.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'


export default async function handler(req, res) {
   if(req.method === 'POST') {
    connectDB();
    const {name,email,password}=req.body;
    if(!name || !email || !password){
        return res.status(400).json({msg:"all fields are necessary!"})
    }

    const emailExists=await Usersoyo.findOne({email});
    if(emailExists) {
        return res.status(400).json({msg:"User already registered!"})
    }

    const hashpassword=await bcrypt.hash(password,10);

const newUser=new Usersoyo({name,email,password:hashpassword});

const result=await newUser.save();
const token=jwt.sign({token:result._id},process.env.JWT_SECRET,{expiresIn:'30d'});

return res.status(201).json({msg:" registered successfully",token});
   }
  }
  