const mongoose = require('mongoose');
const validator = require('validator');
const { ObjectId } = mongoose.Schema.Types;


const jobSchema = new mongoose.Schema({
    job_title: {
        type: String,
        trim: true,
        required: [true, "Please Provide Job Title"],
    },
    img: {
        type: String,
        required: true,
        validate: [validator.isURL, "Please Provide a Image"]
    },
    email: {
        type: String,
    },
    // company: {
    //     type: String,
    //     trim: true,
    //     required: [true, "Please Provide Your Company Name"]
    // },
    location: {
        type: String,
        trim: true,
        minLength: [3, "Location must be at least 3 characters."],
        maxLength: [50, "Location is too large"],
    },
    experience: {
        type: String,
        trim: true,
        enum: {
            values: ["Fresher", "Experienced", "Mid Level Experience"],
            message: "{VALUE}, must be /Fresher/Experienced/Mid Level Experience"
        }
    },
    application_deadline: {
        type: String
    },
    salary: {
        type: String,
        required: [true, "Salary is Required"],
        min: [0, "Salary can't be negative"]
    },
    position: {
        type: String,
        required: true
    },
    job_type: {
        type: String,
        enum: {
            values: ["Full Time", "Part Time", "Hourly"],
            message: "{VALUE}, must be /Full Time/Part Time/ Hourly"
        }
    },
    // company_details: {
    //     type: String,
    //     required: true
    // },
    job_description: {
        type: String,
        required: true
    },
    key_responsibilities: [
        {
            type: String,
            required: true
        }
    ],
    skill_experience: [{
        type: String,
        required: true
    }],
    job_skills: [{
        type: String,
        required: true
    }],
    // company_information: [{
    //     type: String,
    //     required: true
    // }],
    company: [{
        type: String,
    }],
    applicants: [],
    queries: [],
    replies: []
},{
    timestamps: true
});

const Jobs = mongoose.model("Jobs", jobSchema);

module.exports = Jobs;