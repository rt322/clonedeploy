import connectDB from "@/db";
import Hoteloyo from "@/models/hotel-model.js";
import Razorpay from "razorpay";
import shortid from "shortid";

import { useParams } from "next/navigation";


export default async function handler(req, res) {
    connectDB();
 


 if(req.method === 'POST') {
    const razorpay=new Razorpay({
        key_id:process.env.RAZORPAY_KEY,
        key_secret:process.env.RAZORPAY_SECRET
    })

const hotel=await Hoteloyo.findOne({_id:req.body.id});
   
    const amount=hotel.price;
    const options={
        amount:(amount*100).toString(),
        currency:"INR",
        receipt:shortid.generate(),
        payment_capture:1,
    }

    try {
      const result=await razorpay.orders.create(options); 
      console.log(result); 
      res.status(201).json({id:result.id,currency:result.currency,amount:result.amount});
    } catch (error) {
        console.log(error);
    }
 }
}

  