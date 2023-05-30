const Work = require("../models/Work")

exports.createWorkService = async (data) => {
    const work = await Work.create(data);
    return work
}
// --- get all work-----
exports.getWorkService = async (email) => {
    const work = await Work.find({email: email});
    return work
}

// -- update work ------------------------
exports.updateWorkService = async (id, data) => {
    const work = await Work.updateOne(
        { _id: id },
        { $set: data },
        { upsert: true }
    );
    return work;
}

// -- delete work -------------------
exports.deleteWorkService = async (id) => {
    const work = await Work.deleteOne({ _id: id });
    return work;
}