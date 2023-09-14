import { Schema, model, Types } from "mongoose";

let collection = 'users';

let schema = new Schema ({
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    image: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    country: { type: String },
    itineraries: [{ type:Types.ObjectId, ref:'itineraries'}]
},{
    timestamps: true
});

const User = model(collection, schema);

export default User;
