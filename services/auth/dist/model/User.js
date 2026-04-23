import mongoose, { Schema } from "mongoose";
const userSchema = new Schema({
    name: {
        type: "String",
        require: "true"
    },
    email: {
        type: "String",
        require: "true",
        unique: "true"
    },
    image: {
        type: "String",
        require: "true"
    },
    role: {
        type: "String",
        default: "null"
    }
}, {
    timestamps: true,
});
const User = mongoose.model("User", userSchema);
export default User;
