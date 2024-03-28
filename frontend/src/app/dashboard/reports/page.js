import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; // Update with your actual path
import { DatePickerWithRange } from "@/components/dateRange";
import DynamicTable from "@/app/components/dynamicTable";

const Reports = () => {
    const columns = ["Date", "Total Miles Driven", "Energy Consumption", "Cost Analysis"];
    const rows = [ [ "01/01/2022", "100", "200", "300" ], [ "01/02/2022", "200", "300", "400" ] ];

  return (
    <div className="flex flex-col pb-8 h-screen">
      <h1 className="text-2xl text-left text-white my-8 font-bold">Reports</h1>
      <div className="flex flex-row space-x-4">
        {/* Report Type Filter */}
        <Select className="">
          <SelectTrigger className="w-[180px] bg-black text-white border-white/15">
            <SelectValue placeholder="Select Report Type" />
          </SelectTrigger>
          <SelectContent className="bg-black text-white border-white/15 ">
            <SelectGroup>
              <SelectLabel>Report Type</SelectLabel>
              <SelectItem value="totalMilesDriven">
                Total Miles Driven
              </SelectItem>
              <SelectItem value="energyConsumption">
                Energy Consumption
              </SelectItem>
              <SelectItem value="costAnalysis">Cost Analysis</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        {/* Frequency Filter */}
        <Select className="">
          <SelectTrigger className="w-[180px] bg-black text-white border-white/15">
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

        <div className="flex flex-col">
          <DatePickerWithRange />
        </div>

        {/* Additional Filters */}
        {/* Here you can add additional select boxes or any other input elements for additional filters */}
      </div>
      <div className="grid grid-cols-4 gap-4 mt-8">
       <DynamicTable rows={rows} columns={columns} />

      </div>    
    </div>
  );
};

export default Reports;
