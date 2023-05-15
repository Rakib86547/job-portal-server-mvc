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
    console.log('service: ', id)  
    const jobs = await Jobs.findOne({ _id: id });
    return jobs;
}

exports.createJobsService = async (data) => {
    const jobs = await Jobs.create(data);
    return jobs;
}