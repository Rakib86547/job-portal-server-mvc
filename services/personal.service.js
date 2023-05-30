const PersonalInfo = require("../models/PersonalInfo")

exports.createPersonalInfoService = async (email, info) => {
    const personal = await PersonalInfo.updateOne(
        { email: email },
        { $set: info },
        { upsert: true }
    );
    return personal
}
exports.getPersonalInfoService = async (email) => {
    const personal = await PersonalInfo.findOne({ email: email });
    return personal;
}