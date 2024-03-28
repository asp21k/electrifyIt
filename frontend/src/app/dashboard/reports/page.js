"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import DynamicTable from "@/app/components/dynamicTable"; // Update with your actual table component

const Reports = () => {
  const [reportType, setReportType] = useState("Total-Miles-Driven");
  const [fdate, setFDate] = useState("");
  const [fmonth, setFMonth] = useState("");
  const [fyear, setFYear] = useState("");
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:5050/report/data", {
        params: { reportType, fdate, fmonth, fyear },
      });
      console.log("Data fetched:", response.data);

      // Extracting column names
      const columnNames = Object.keys(response.data[0]);
      setColumns(columnNames);

      // Extracting rows
      const dataRows = response.data.map((item) => Object.values(item));
      setRows(dataRows);

      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [reportType, fdate, fmonth, fyear]);

  return (
    <div className="flex flex-col pb-8 h-full">
      <h1 className="text-2xl text-left text-white my-8 font-bold">Reports</h1>
      {/* Your filter components */}
      <div className="grid grid-cols-4 gap-4 mt-8">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <DynamicTable columns={columns} rows={rows} />
        )}
      </div>
    </div>
  );
};

export default Reports;
