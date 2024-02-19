import connectDB from "@/db";
import Usersoyo from "@/models/user-model.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'


export default async function handler(req, res) {
   if(req.method === 'POST') {
    connectDB();
    const {email,password}=req.body;
    if( !email || !password){
        return res.status(400).json({msg:"all fields are necessary!"})
    }

    const emailExists=await Usersoyo.findOne({email});
    if(!emailExists) {
        return res.status(400).json({msg:" register first!"})
    }
const passwordmatch=await bcrypt.compare(password,emailExists.password);

if(!passwordmatch) {
    return res.status(400).json({msg:"Invalid credentials!"})
}


const token=jwt.sign({token:emailExists._id},process.env.JWT_SECRET,{expiresIn:'30d'});

return res.status(201).json({msg:"logged in successfully",token});
   }
  }
  