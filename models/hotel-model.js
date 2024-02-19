import mongoose from "mongoose";

// Define the hotel schema
const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true // Ensure uniqueness of the 'name' field
    },
    description: {
        type: String,
        required: true,
    },
    banner: {
        type: String,
        required: true
    },
    gallery: [{
        type: String
    }],
    price: {
        type: Number
    },
    facilities: [{
        img: String,
        name: String
    }],
    location: {
        type: String
    }
}, { timestamps: true });

// Check if the model already exists before defining it
const Hoteloyo = mongoose.models.Hoteloyo || mongoose.model("Hoteloyo", hotelSchema);

export default Hoteloyo;