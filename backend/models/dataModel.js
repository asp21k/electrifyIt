const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  licensePlate: {
    type: String,
    required: true,
    unique: true,
  },
  make: {
    type: String,
    required: true,
  },
  vin: {
    type: String,
    required: true,
    unique: true,
  },
  model: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  milesDriven: {
    type: Number,
    required: true,
    minimum: 0,
  },
});

module.exports = mongoose.model("sample", vehicleSchema); // Changed model name to 'Vehicle'
