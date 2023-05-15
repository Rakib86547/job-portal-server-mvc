const User = require("../models/User")

exports.signupService = async (userInfo, email) => {
    const user = await User.updateOne({ email: email }, {
        $set: userInfo
    }, { upsert: true });
    return user;
};

exports.getUserByEmailService = async (email) => {
    const user = await User.findOne({email: email});
    return user;
}
exports.getallUserService = async () => {
    const user = await User.find();
    return user;
}
