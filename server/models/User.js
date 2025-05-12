import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {type: String, requied: true, unique: true},
    fullName: {type: String, requied: true},
    password: {type: String, requied: true, minlength: 6},
    profilePic: {type: String, requied: true, default: ""},
    bio: {type: String},
}, {timestamps:true});

const User = mongoose.model("User", userSchema);

export default User;