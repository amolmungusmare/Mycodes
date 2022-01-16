const jwt = require("jsonwebtoken");
const GenerateToken = (data) => {
  const token = jwt.sign({ data }, "Amol", { expiresIn: "2h" });
  return token;
};

const AccessToken = (req, res, next) => {
  if (req.headers.cookie) {
    const token = req.headers.cookie.split("=")[1];
    const decode = jwt.verify(token, "Amol");
    req.token = decode;
    next();
  } else {
    req.token = "token not found";
    next();
  }
};
module.exports = { GenerateToken, AccessToken };
