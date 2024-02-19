import connectDB from "@/db";
import Hoteloyo from "@/models/hotel-model.js";
import { useEffect } from 'react'; // Assuming you are using React

export default async function handler(req, res) {
    connectDB();
 
    if(req.method === 'GET') {
        if(req.query.id){
            const hotel = await Hoteloyo.findById(req.query.id);
            res.status(200).json({msg:"Good",hotel});
        }
    }
}

// If you are using React, add the following line at the beginning of the file
// import { useEffect } from 'react';

// Then, assuming you are using useEffect in this file, modify it like this:
useEffect(() => {
    // Your effect code here
}, []); // Add any dependencies inside the array if needed
