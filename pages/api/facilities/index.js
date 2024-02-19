import connectDB from "@/db";
import Hoteloyo from "@/models/hotel-model.js";



export default async function handler(req, res) {
    connectDB();
 
 if(req.method === 'GET') {
    const facilities=await Hoteloyo.find({}).distinct('facilities.name');
    res.status(200).json({msg:"Good facility",facilities});
   
 }
}

  