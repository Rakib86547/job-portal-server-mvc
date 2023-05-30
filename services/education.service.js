const Education = require("../models/Education")


// ---- create education --------------------
exports.createEducationService = async (data) => {
    const education = await Education.create(data);
    return education;
}

// -- get specify user education from database--------------
exports.getEducationService = async (email) => {
    const education = await Education.find({ email: email });
    return education;
}

// -- update education ------------------------
exports.updateEducationService = async (id, data) => {
    const education = await Education.updateOne(
        { _id: id },
        { $set: data },
        { upsert: true }
    );
    return education;
}

// -- update education -------------------
exports.deleteEducationService = async (id) => {
    const education = await Education.deleteOne({ _id: id });
    return education;
}