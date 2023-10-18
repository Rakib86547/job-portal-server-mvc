const { createSkillService, getSkillService, deleteSkillService } = require("../services/skill.service");

exports.createSkill = async (req, res) => {
    try {
        const data = req.body;
        const result = await createSkillService(data);
        res.status(200).send({
            status: "Success",
            data: result
        })
    } catch (error) {
        res.status(400).send({
            status: "Fail",
            message: error.message
        })
    }
}
exports.getSkills = async (req, res) => {
    try {
        const email = req.params.email;
        const result = await getSkillService(email);
        res.status(200).send({
            status: "Success",
            data: result
        })
    } catch (error) {
        res.status(400).send({
            status: "Fail",
            message: error.message
        })
    }
}
exports.deleteSkill = async (req, res) => {
    try {        
        const id = req.params.id;
        const result = await deleteSkillService(id);
        res.status(200).send({
            status: "Success",
            data: result
        })
    } catch (error) {
        res.status(400).send({
            status: "Fail",
            message: error.message
        })
    }
}