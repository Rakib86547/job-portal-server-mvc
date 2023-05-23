const Jobs = require("../models/Jobs")

exports.getJobsService = async () => {
    const jobs = await Jobs.find({});
    return jobs;
}
exports.getJobsByCategoryService = async (category) => {
    const jobs = await Jobs.find({ job_title: category });
    return jobs;
}
exports.getJobsDetailsByIdService = async (id) => {
    const jobs = await Jobs.findOne({ _id: id });
    return jobs;
}

exports.createJobsService = async (data) => {
    const jobs = await Jobs.create(data);
    return jobs;
}


// ---------- get exist job applied user ----------
exports.existApplyUserService = async (id) => {
    const existApply = await Jobs.findOne({ _id: id });
    return existApply
}

// ------------- post job apply ------------------
exports.createApplyService = async (id, data) => {
    const apply = await Jobs.updateOne(
        { _id: id },
        {
            $push: { applicants: data }
        },
        { new: true },
    )
    return apply
}

// --------get all apply jobs of specific user -------------

exports.getAppliedJobsService = async (email) => {
    const appliedJobs = await Jobs.find({ 'applicants': { $elemMatch: { email: email } } });
    return appliedJobs;
}