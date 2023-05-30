const mongoose = require('mongoose');

const workSchema = new mongoose.Schema({
    job_title: String,
    company: String,
    start_date: String,
    end_date: String,
    description: String,
    email: String
}, {
    timestamps: true
});

const Work = mongoose.model('Work', workSchema);
module.exports = Work;