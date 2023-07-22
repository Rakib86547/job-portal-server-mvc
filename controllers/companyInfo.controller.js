const { createCompanyInfoService, getCompanyInfoService } = require("../services/companyInfo.service");

exports.createCompanyInfo = async (req, res) => {
    try {
        const companyInfo = req.body;
        const email = req.body.user_email;
        const result = await createCompanyInfoService(email, companyInfo);
        console.log(result)
        // const {_id}
        res.status(200).json({
            status: 'Success',
            data: result
        });
    } catch (error) {
        res.status(400).send({ status: 'Fail', message: error.message })
    }
};

exports.getCompanyInfo = async (req, res) => {
    try {
        const email = req.params.email;
        const result = await getCompanyInfoService(email);
        res.status(200).send({
            status: 'Success',
            data: result
        });
    } catch (error) {
        res.status(400).send({ status: 'Fail', message: error.message })
    }
}