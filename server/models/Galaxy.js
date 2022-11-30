import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId

export const GalaxySchema = new Schema({
    name: { type: String, required: true },
    stars: { type: Number, required: true },
    // planets: { type: ObjectId, required: true },
    // id: { type: ObjectId, required: true, ref: 'Planet' }
}, { timestamps: true, toJSON: { virtuals: true } })

GalaxySchema.virtual('PlanetCount', {
    localField: '_id',
    ref: 'Planet',
    foreignField: 'galaxyId',
    count: true
})