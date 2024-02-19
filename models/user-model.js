import mongoose from "mongoose";

// Check if the model already exists before defining it
const Usersoyo = mongoose.models.Usersoyo || mongoose.model("Usersoyo", new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true }));

export default Usersoyo;
