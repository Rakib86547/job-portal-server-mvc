const mongoose = require('mongoose');
const validator = require('validator')

const categorySchema = new mongoose.Schema({
    position: String,
    category: {
        type: String,
        required: [true, "Please Select a Category"],
    },
    image: {
        type: String,
        required: true,
        validate: [validator.isURL, "Please Provide a Valid Image URL"]
    }
});

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;