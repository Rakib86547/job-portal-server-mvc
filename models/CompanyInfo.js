const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;
const companyInfoSchema = new mongoose.Schema({
    company_name: {
        type: String,
        require: [true, 'Please Insert Your Company Name']
    },
    email: String,
    phone: String,
    company_website: String,
    est_since: String,
    team_size: String,
    country: String,
    city: String,
    address: String,
    company_type: String,
    company_about: String,
    user_email: String,
    jobs:[{
        type: ObjectId,
        ref: 'Jobs'
    }]
}, {
    timestamps: true
});

const Company = mongoose.model('Company', companyInfoSchema);
module.exports = Company