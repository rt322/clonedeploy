import connectDB from "@/db";
import Hoteloyo from "@/models/hotel-model.js";



export default async function handler(req, res) {
    connectDB();
   if(req.method === 'POST') {
 const newHotel=new Hoteloyo(req.body);
 const result=await newHotel.save();
 res.status(201).json({msg:"Hotel Added!",result});
   }
 
 if(req.method === 'GET') {
    const hotels=await Hoteloyo.find({location:req.query.city});
    if(hotels.length >0) {
        return   res.status(200).json({msg:"Good",hotels});
    }
 
const allhotels=await Hoteloyo.find({});
return   res.status(200).json({msg:"Good",allhotels});
 }
}

  