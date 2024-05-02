// trainController.js

const Train = require("../models/Train");

exports.addTrain = async (req, res) => {
  try {
    const { source, destination } = req.body;

    // Create a new train
    await Train.create({ source, destination });

    res.status(201).json({ message: "Train added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
