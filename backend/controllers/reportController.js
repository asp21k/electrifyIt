const { FileStreamer } = require("papaparse");
const Vehicle = require("../models/dataModel"); 

const getAllData = async (req, res) => {
  const pageNo = parseInt(req.query.pageNo);
  const size = parseInt(req.query.size);
  try {
    if (pageNo <= 0) {
      return res.status(200).send("Invalid Page No");
    }
    const skip = (pageNo - 1) * size;
    const vehicles = await Vehicle.find().skip(skip).limit(size);
    res.status(200).json({ success: true, data: vehicles });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
const fetchData = async (req, res) => {
  try {
    const { reportType, frequency, fromDate, toDate } = req.query;
    console.log(req.query);
    

    let filter = {};

    
    if (fromDate && toDate) {
      filter.date = {
        $gte: new Date(fromDate),
        $lte: new Date(toDate),
      };
    }
    
    let data;
    
    data = await Vehicle.find(filter);
    // console.log(data);
    let result = {};
    if (frequency === "daily") {
      result = aggregateTotalMilesDaily(data);
    } else if (frequency === "monthly") {
      result = aggregateTotalMilesMonthly(data);
    } else if (frequency === "yearly") {
      result = aggregateTotalMilesYearly(data);
    }
    // console.log(result);
    if (reportType === "total-miles-driven") {
      res.json(result);
    } else if (reportType === "energy-consumption") {
      Object.keys(result).forEach((date) => {
        result[date] = result[date] * 0.3;
      });
      res.status(200).json({ message: "Energy consumption report", data: result});
    } else if (reportType === "cost-analysis") {
      Object.keys(result).forEach((date) => {
        result[date] = result[date] * 0.3 * 0.1;
      });
      res.status(200).json({ message: "Cost analysis report", data: result});
    } else {
      res.status(400).json({ message: "Invalid report type" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message, success: false });
  }
};


function aggregateTotalMilesDaily(data) {
  const dailyTotal = {};

   data.forEach((vehicle) => {
    // console.log(vehicle.date);
     const date =  vehicle.date.toString().split(" ").slice(0, 4).join(" ");
    //  console.log("date",vehicle.date.toString());
    // console.log("date",date);
    dailyTotal[date] = (dailyTotal[date] || 0) + (vehicle.milesDriven || 0);
    // console.log(dailyTotal[date]);
  });

  return dailyTotal;
}

function aggregateTotalMilesMonthly(data) {
  const monthlyTotal = {};

  data.forEach((vehicle) => {
    var yearMonth = vehicle.date.toString().split(" ");
    const year=yearMonth[3];
    const month=yearMonth[1];
    yearMonth = year + "-" + month;
    monthlyTotal[yearMonth] =
      (monthlyTotal[yearMonth] || 0) + (vehicle.milesDriven || 0);
  });

  return monthlyTotal;
}

function aggregateTotalMilesYearly(data) {
  const yearlyTotal = {};

  data.forEach((vehicle) => {
    const year = vehicle.date.toString().split(" ")[3];
    yearlyTotal[year] = (yearlyTotal[year] || 0) + (vehicle.milesDriven || 0);
  });

  return yearlyTotal;
}

module.exports = { getAllData, fetchData };
