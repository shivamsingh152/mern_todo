import mongoose, { model } from "mongoose";  

const todoSchema = new mongoose.Schema({
    data:{
        type: String,
        required: true
    },
    done:{
        type: Boolean,
        default: false
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('todo', todoSchema);
