// apiKeyMiddleware.js

const config = require("../config");

exports.verifyApiKey = (req, res, next) => {
  const apiKey = req.headers["x-api-key"];

  if (!apiKey || apiKey !== config.apiKey) {
    return res.status(401).json({ message: "Invalid API key" });
  }

  next();
};
