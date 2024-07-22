//This is a schema

import mongoose from 'mongoose'


const JobSchema = new mongoose.Schema({
    title: {type: String, required: true, trim: true},
    company: {type: String, required: true, trim: true},
    description: { type: String, required: true, trim: true},
    employmentType: {type: String, required: true, trim: true},
    logoUrl: {type: String, required: true},
    location: {type: String, required: true, trim: true},
    experience: {type: String, required: true, trim: true},
    salary: {type: String, trim: true},
    duties: {type:[String], trim: true},
    skills:{type: [String], trim: true},
    latitude: {type: String},
    longitude: {type: String}
}, {timestamps: true})

export default mongoose.models.Jobs || mongoose.model('Jobs', JobSchema)