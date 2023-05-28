const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    filename: String,
    path: String,
    originalname: String,
    email: String
},
    {
        timestamps: true
    }
);

const File = mongoose.model("File", fileSchema);
module.exports = File