const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mongo_url = process.env.MONGO_CONN_DB;

mongoose.connect(mongo_url)
.then(()=>{
    console.log("MongoDB connected");
})
.catch((err)=>{
    console.log("MongoDB connection error:",err);
})

const UserSchema = new Schema({
    fullname:{
        type: String,
        required:true
    },
    username:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    mobile:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    confirmPassword:{
        type: String,
        required:true
    }
})

const User = mongoose.model('User',UserSchema);
module.exports = User;