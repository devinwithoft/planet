import { Schema } from "mongoose";


export const ColonySchema = new Schema({
    name: { type: String, required: true },
    population: { type: Number, required: true },
    planetId: { type: Schema.Types.ObjectId, ref: 'finish this' },
})