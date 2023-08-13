const mongoose = require('mongoose');

const skillsSchema = new mongoose.Schema({
    email: String,    
    skills: String
}, {
    timestamps: true
});

const Skills = mongoose.model('Skills', skillsSchema);
module.exports = Skills;