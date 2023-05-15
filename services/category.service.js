const Category = require("../models/Category")

exports.getCategoriesService = async () => {
    const categories = await Category.find({});
    return categories;
}
exports.createCategoriesService = async (data) => {
    const categories = await Category.create(data);
    return categories;
}