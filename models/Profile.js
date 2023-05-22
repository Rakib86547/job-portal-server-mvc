const mongoose = require('mongoose');
const validator = require('validator');

const profileSchema = new mongoose.Schema({
    name: String,
    job_title: String,
    phone: String,
    language: {
        type: String,
        enum: ['English', 'Bangla', 'France']
    },
    website: {
        type: String,
        validate: [validator.isURL, "Please Provide a Valid URL"]
    },
    age: String,
    image: {
        type: String,
        validate: [validator.isURL, 'Please provide a valid url']
    },
    description: String
});

const Profile = mongoose.model("Profile", profileSchema);
module.exports = Profile;