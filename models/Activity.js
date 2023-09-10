import { Schema, model, Types } from "mongoose";


let collection = 'activities'

let schema = new Schema({
    name: { type: String, required: true},
    image: { type: String, required: true },
    description: { trype: String, required: false },
    itinerary: { type: Types.ObjectId, ref: 'itineraries'}
},{
    timestamps: true
})

const Activity = model(collection, schema)

export default Activity