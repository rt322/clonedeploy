import connectDB from "@/db";
import Hoteloyo from "@/models/hotel-model.js";


export default async function handler(req, res) {
    connectDB();
 
    if(req.method === 'GET') {
        if(req.query.id){
            const hotel = await Hoteloyo.findById(req.query.id);
            res.status(200).json({msg:"Good",hotel});
        }
    }
}

