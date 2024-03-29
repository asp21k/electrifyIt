"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; // Update with your actual path
import { DatePicker } from "@/components/dateRange"; // Update with your actual path
import DynamicTable from "@/app/components/dynamicTable";
import { set } from "date-fns";

const Reports = () => {
  const [reportType, setReportType] = useState("total-miles-driven");
  const [frequency, setFrequency] = useState("daily");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState([]);
  const [filterOn, setFilterOn] = useState(true);

  const columns = [
    "licensePlate",
    "make",
    "vin",
    "type",
    "date",
    "milesDriven",
  ];

  const fetchAllData = async () => {
    try {
      // setLoading(true);
      setFilterOn(false);
      const response = await axios.get(
        "https://atharva.centralindia.cloudapp.azure.com/report/",
        {}
      );
      console.log("Data fetched:", response.data.data);
      setData(response.data);
      const result = await Object.values(data.data)?.map((item) => [
        item.licensePlate,
        item.make,
        item.vin,
        item.type,
        item.date,
        item.milesDriven,
      ]);
      setRows(result);
      console.log("Rows:", rows);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const fetchData = async () => {
    try {
      console.log(fromDate, toDate);
      setFilterOn(true);
      const fromDateFormatted = handleFormatDate(fromDate);
      const toDateFormatted = handleFormatDate(toDate);
      setLoading(true);
      const response = await axios.get(
        "https://atharva.centralindia.cloudapp.azure.com/report/data",
        {
          params: {
            reportType,
            frequency,
            fromDate: fromDateFormatted,
            toDate: toDateFormatted,
          },
        }
      );
      console.log("Data fetched:", response.data.data);
      setData(response.data);
      const result = [];
      for (const [dateString, value] of Object.entries(data.data)) {
        result.push([dateString, value]);
      }
      setRows(result);
      console.log("Rows:", rows);
      setLoading(false);
    } catch (error) {
      // console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const handleFormatDate = (date) => {
    return date ? date.toISOString().split("T")[0] : "";
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    fetchData();
  }, [reportType, frequency, fromDate, toDate]);

  return (
    <div className="flex flex-col pb-8 ">
      <h1 className="text-2xl text-left text-white my-8 font-bold">Reports</h1>
      <div className="flex flex-row space-x-4 justify-between">
        <Select
          value={reportType}
          onValueChange={setReportType}
          defaultValue="total-miles-driven"
        >
          <SelectTrigger className="w-1/6 bg-blue-800/15 text-white border-white/15">
            <SelectValue placeholder="Select Report Type:" />
          </SelectTrigger>
          <SelectContent className="bg-black text-white border-white/15 ">
            <SelectGroup>
              <SelectLabel>Report Type</SelectLabel>
              <SelectItem value="total-miles-driven">
                Total Miles Driven
              </SelectItem>
              <SelectItem value="energy-consumption">
                Energy Consumption
              </SelectItem>
              <SelectItem value="cost-analysis">Cost Analysis</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        {/* Frequency Filter */}
        <Select
          value={frequency}
          onValueChange={setFrequency}
          defaultValue="daily"
        >
          <SelectTrigger className="w-1/6 bg-blue-800/15 text-white border-white/15">
            <SelectValue placeholder="Select Frequency" />
          </SelectTrigger>
          <SelectContent className="bg-black text-white border-white/15 ">
            <SelectGroup>
              <SelectLabel>Frequency</SelectLabel>
              <SelectItem value="daily">Daily</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="yearly">Yearly</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <DatePicker setFromDate={setFromDate} text={"Select Start Date:"} />
        <DatePicker setFromDate={setToDate} text={"Select End Date:"} />
      </div>
      {/* <button
        className="bg-blue-800/15 w-1/6 border border-white/15 text-white left-0 p-2 rounded-lg mt-4"
        onClick={() => fetchAllData()}
      >
        Get All Data
      </button> */}
      <div className="my-8">
        {loading ? (
          <p>Loading...</p>
        ) : (
          filterOn && <DynamicTable columns={data.columns} rows={rows} />
        )}
        {!filterOn && <DynamicTable columns={columns} rows={rows} />}
        {rows.length === 0 && fromDate && toDate ? (
          <p className="text-xl text-center my-16">
            {" "}
            Select a date range to view data
          </p>
        ) : (
          <p className="text-xl text-center my-16">
            No data available for the selected date range
          </p>
        )}
      </div>
    </div>
  );
};

export default Reports;
