const mongoose = require('mongoose');

const personalInfoSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    country: String,
    city: String,
    street_address: String,
    phone: String,
    email: String
});
const PersonalInfo = mongoose.model('PersonalInfo', personalInfoSchema);
module.exports = PersonalInfo