const mongoose = require('mongoose');

const electricVehicleSchema = new mongoose.Schema({
  licensePlate: {
    type: String,
    required: true,
    unique: true
  },
  make: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  vin: {
    type: String,
    required: true,
    unique: true
  },
  type: {
    type: String,
    required: true,
    enum: ['Car', 'SUV', 'Truck', 'Other']
  },
  trips: [
    {
      date: {
        type: Date,
        required: true
      },
      milesDriven: {
        type: Number,
        required: true
      },
      energyDelivered: { // kWh
        type: Number
      },
      chargingDuration: { // Hours
        type: Number
      },
      climateControlUsage: { // kWh
        type: Number
      },
      averageSpeed: { // mph
        type: Number
      }
    }
  ],
  batteryHealth: { // Optional
    type: Number
  },
  odometerReading: { // Optional
    type: Number
  }
});

module.exports = mongoose.model('data', electricVehicleSchema);
  