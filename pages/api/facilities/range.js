import connectDB from "@/db";
import Hoteloyo from "@/models/hotel-model.js";



export default async function handler(req, res) {
    connectDB();
 
 if(req.method === 'GET') {
    const key=req.query.price;
    const hotels=await Hoteloyo.find({price:{$lte : key}});//lte=less than or equal to
    res.status(200).json({msg:"Range filter",hotels});
   
 }
}

  