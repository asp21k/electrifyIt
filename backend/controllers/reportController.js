const { FileStreamer } = require("papaparse");
const Data = require("../models/dataModel");


const getAllData = async (req, res) => {
  const pageNo = parseInt(req.query.pageNo);
  const size = parseInt(req.query.size);
  try {
    if (pageNo <= 0) {
      return res.status(200).send("Invalid Page No");
    }
    skip = (pageNo - 1) * size;
    const report = await Data.find().skip(skip).limit(size);
    res.status(200).json({ success: true, data: report });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
// backend/controllers/dataController.js

const fetchData = async (req, res) => {

  try {
    const { reportType, fdate, fmonth, fyear } = req.query;
    console.log(req.query);
    let filter = {};

    // Apply time frame filtering
    if (fdate) {
      filter.createdAt = {
        $gte: new Date(fdate),
        $lt: new Date(new Date(fdate).setDate(new Date(fdate).getDate() + 1)), // Next day
      };
    } else if (fmonth) {
      const [year, month] = fmonth.split("-");
      filter.createdAt = {
        $gte: new Date(year, month - 1, 1),
        $lt: new Date(year, month, 0, 23, 59, 59), // Last day of the month
      };
    } else if (fyear) {
      const year = parseInt(fyear);
      filter.createdAt = {
        $gte: new Date(year, 0, 1),
        $lt: new Date(year + 1, 0, 1), // First day of next year
      };
    }

    let data;

    // Apply report type filtering
    if (reportType === "Total-Miles-Driven") {
      data = await getTotalMilesDrivenData(filter);
    } else if (reportType === "Energy-Consumption") {
      data = await getEnergyConsumptionData(filter);
    } else if (reportType === "Cost-Analysis") {
      data = await getCostAnalysisData(filter);
    } else {
      // If report type is not specified or invalid, return all data within the specified time frame and frequency
      data = await Data.find(filter);
    }

    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message, success: false });
  }
};

async function getTotalMilesDrivenData(filter) {
    console.log("filter =",{filter});
    
  const data = await Data.find(filter, {
    licensePlate: 1,
    make: 1,
    model: 1,
    vin: 1,
    type: 1,
    odometerReading: 1,
    batteryHealth: 1,
    _id: 0,
  });
  console.log(data);
  return data;
}

async function getEnergyConsumptionData(filter) {
  const data = await Data.find(filter).select(
    "licensePlate trips.energyDelivered"
  );
  return data;
}

async function getCostAnalysisData(filter) {
  // Implement logic for cost analysis based on electricity rates
  const data = await Data.find(filter).select(
    "licensePlate trips.energyDelivered"
  );
  return data;
}

module.exports = { fetchData, getAllData };
