import connectDB from "@/db";
import Hoteloyo from "@/models/hotel-model.js";



export default async function handler(req, res) {
    connectDB();
 
 if(req.method === 'GET') {
    const key=req.query.val;
    const hotels=await Hoteloyo.find({'facilities.name':{$in:key}});
    res.status(200).json({msg:"All Good",hotels});
   
 }
}

  