import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
    name:"String",
    email:"String",
    image:"String",
    role:"String"
}




const userSchema = new Schema({
    name: {
        type:"String",
        require:"true"

    },
    email: {
        type:"String",
        require:"true",
        unique:"true"


    },
    image: {
        type:"String",
        require:"true"

    },
    role: {
        type:"String",
        default:"null"

    }


},
    {
        timestamps: true,
    }
);

const User = mongoose.model <IUser> ("User",userSchema);
export default User;