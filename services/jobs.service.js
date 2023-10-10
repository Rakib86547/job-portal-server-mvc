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
exports.getHrJobsService = async (email, skip, limit) => {
    const jobs = await Jobs.find({ email: email }).skip(skip).limit(limit);
    return jobs
}
exports.getHrTotalJobsService = async (email) => {
    const totalJobs = await Jobs.find({ email: email });
    return totalJobs
}

exports.deleteJobService = async (id) => {
    const job = await Jobs.deleteOne({ _id: id });
    return job
}
exports.getManageJobService = async (id) => {
    const result = await Jobs.findOne({ _id: id });
    return result;
}
exports.deleteApplierService = async (email, id) => {
    const result = await Jobs.updateOne(
        { _id: id },
        { $pull: { applicants: { jobId: id, email: email } } }
    );
    return result
}

exports.getAllApplierService = async (email, skip, limit) => {
    const result = await Jobs.find({ email: email }).skip(skip).limit(limit);
    return result
}
exports.getAllAppliersService = async (email) => {
    const result = await Jobs.find({ email: email });
    return result
}

exports.getTotalJobsService = async () => {
    const result = await Jobs.find();
    return result
}
exports.getAllJobsService = async (skip, limit) => {
    const result = await Jobs.find().skip(skip).limit(limit);
    return result
}
exports.getTodayJobsService = async (todayDate) => {
    const result = await Jobs.find({ createdAt: todayDate });
    return result
}
exports.getTotalAllJobsService = async () => {
    const result = await Jobs.find();
    return result
}
