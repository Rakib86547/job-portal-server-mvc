const { getCategoriesService, createCategoriesService } = require("../services/category.service");

exports.getCategories = async (req, res, next) => {
    try {
        const categories = await getCategoriesService();
        res.status(200).send({
            status: "Success",
            data: categories
        })
    } catch (error) {
        res.status(400).send({
            status: "Fail",
            error: error.message
        })
    }    
}
exports.createCategories = async (req, res, next) => {
    try {
        const categories = await createCategoriesService(req.body);
        res.status(200).send({
            status: "Success",
        })
    } catch (error) {
        res.status(400).send({
            status: "Fail",
            error: error.message
        })
    }    
}