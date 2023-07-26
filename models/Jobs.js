const mongoose = require('mongoose');
const validator = require('validator');
const { ObjectId } = mongoose.Schema.Types;


const jobSchema = new mongoose.Schema({
    job_title: {
        type: String,
        // trim: true,
        // required: [true, "Please Provide Job Title"],
    },
    img: {
        type: String,
        // required: true,
        // validate: [validator.isURL, "Please Provide a Image"]
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
    },
    experience: {
        type: String,
    },
    application_deadline: {
        type: String
    },
    salary: {
        type: String,
    },
    position: {
        type: String,
        // required: true
    },
    job_type: {
        type: String,
        // enum: {
        //     values: ["Full Time", "Part Time", "Hourly"],
        //     message: "{VALUE}, must be /Full Time/Part Time/ Hourly"
        // }
    },
    // company_details: {
    //     type: String,
    //     required: true
    // },
    job_description: {
        type: String,
        // required: true
    },
    key_responsibilities: [
        {
            type: String,
            // required: true
        }
    ],
    skill_experience: [{
        type: String,
        // required: true
    }],
    job_skills: [{
        type: String,
        // required: true
    }],
    company_infortmation: [{
        name: {
            type: String
        },
        industry: {
            type: String
        },
        employer: {
            type: String
        },
        found_in: {
            type: String
        },
        email: {
            type: String
        },
        website: {
            type: String
        },
        location: {
            type: String
        },
        company_name: {
            type: String
        }
    }],
    company: [{
        type: String,
    }],
    applicants: [],
    queries: [],
    replies: []
}, {
    timestamps: true
});

const Jobs = mongoose.model("Jobs", jobSchema);

module.exports = Jobs;