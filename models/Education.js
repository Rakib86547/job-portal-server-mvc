const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
    degree_name: String,
    start_date: String,
    end_date: String,
    institute_name: String,
    description: String,
    email: String
}, {
    timestamps: true
});

const Education = mongoose.model('Education', educationSchema);
module.exports = Education;