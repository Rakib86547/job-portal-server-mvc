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
    console.log('service job', data)
    const jobs = await Jobs.create(data);
    console.log('return ', jobs)
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

// ----- save questions -----
exports.createQuestionsService = async (id, data) => {
    const appliedJobs = await Jobs.updateOne({ _id: id }, { queries: data });
    return appliedJobs;
}


exports.createRipleyService = async (id, data) => {
    const ripley = await Jobs.updateOne({ _id: id }, { replies: data });
    return ripley;
}


exports.getQuestionsService = async (id) => {
    const question = await Jobs.findOne({ _id: id });
    return question;
}
exports.getRipleyService = async (id) => {
    const ripley = await Jobs.findOne({ _id: id });
    return ripley;
}

exports.getHrJobsService = async (email) => {
    const jobs = await Jobs.find({ email: email });
    return jobs
}

exports.deleteJobService = async (id) => {
    const job = await Jobs.deleteOne({ _id: id });
    return job
}
exports.getManageJobService = async (id) => {
    const result = await Jobs.findOne({ _id: id });
    return result;
}