const Company = require("../models/companyInfo")

exports.createCompanyInfoService = async (email, companyInfo) => {
    const info = await Company.updateOne({ user_email: email }, { $set: companyInfo }, { upsert: true })
    return info;
};

exports.getCompanyInfoService = async (email) => {
    const info = await Company.findOne({ user_email: email });
    return info;
}