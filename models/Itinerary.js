import { Schema, model, Types } from 'mongoose';

let collection = 'itineraries'

let schema = new Schema({
    user: { type: Types.ObjectId, ref: 'users'},
    city: { type: Types.ObjectId, ref: 'cities'},
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    duration: { type: Number, required: true },
    likes: { type: Number, required: false },
    hashtags: [{ type: String, required: false }],
    comments: [{ type: String, required: false }],
},{
    timestamps: true
})

const Itinerary = model(collection, schema)

export default Itinerary;