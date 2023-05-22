const Profile = require("../models/Profile");
const User = require("../models/User");

exports.createProfileService = async (profileInfo, email) => {
    const profile = await User.updateOne(
        { email: email },
        { $set: profileInfo },
        { upsert: true }
    );
    return profile;
}
exports.getUpdateUserService = async (email) => {
    const profile = await User.findOne({ email: email });
    return profile;
}