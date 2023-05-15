const jwt = require("jsonwebtoken");


exports.generateToken = (userInfo) => {    
  const token = jwt.sign(userInfo, process.env.JWT_SECRET_KEY, {
    expiresIn: "7days"
  });

  return token;
};