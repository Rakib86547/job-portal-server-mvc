const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Insert a Your Name"],
        trim: true,
        minLength: [3, "Name must be at least 3 characters."],
        maxLength: [100, "Name is too large"],
    },
    email: {
        type: String,
        required: [true, "Insert Your Email"],
        unique: true,
        trim: true,
        validate: [validator.isEmail, "Email address is required"],
        lowercase: true
    },
    password: {
        type: String,
        required: [true, "Password is Required"],
        validate: {
            validator: (value) => {
                validator.isStrongPassword(value, {
                    minLength: 6,
                    minLowercase: 1,
                    minNumbers: 1,
                    minUppercase: 1,
                    minSymbols: 1,
                })
            }
        },
        message: "Password {VALUE} is not Strong"
    },
    confirmPassword: {
        type: String,
        required: [true, "Please confirm your password"],
        validate: {
            validator: function (value) {
                return value === this.password;
            },
            message: "Passwords don't match!",
        },
    },
    role: {
        type: String,
        required: [true, "Please Select Your Role"],
        enum: ["Candidate", "Employer"],
        default: "Employer",
    },
    img: String,
    job_title: String,
    phone: String,
    language: String,
    website: String,
    age: String,
    description: String

}, {
    timestamps: true
});

userSchema.pre('save', async function () {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
})

// userSchema.pre("save", function (next) {
//     const password = this.password;
//     const hashedPassword = bcrypt.hashSync(password);
//     this.password = hashedPassword;
//     this.confirmPassword = undefined;

//     next()
// });

// userSchema.methods.generateConfirmationToken = function () {
//     const token = crypto.randomBytes(64).toString("hex");
//     this.confirmationToken = token;
//     const date = new Date();

//     date.setDate(date.getDate() + 1);
//     this.confirmationTokenExpires = date;
//     return token;
// }

const User = mongoose.model('User', userSchema);
module.exports = User;