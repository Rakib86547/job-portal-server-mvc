const Skills = require("../models/Skills")

exports.createSkillService = async (data) => {
    const result = await Skills.create(data);
    return result;
};

exports.getSkillService = async (email) => {
    const result = await Skills.find({ email: email });
    return result
};

exports.deleteSkillService = async (id) => {
    const result = await Skills.deleteOne({ _id: id });
    return result
}