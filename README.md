Vehicle Data Reporting System

Project Overview:

This project consists of a web application for generating reports based on vehicle data. The application is built using a combination of frontend and backend technologies, including Next.js with Tailwind CSS for the frontend, Node.js with Express for the backend, and MongoDB for the database. The frontend is deployed on Vercel, while the backend is deployed on an Azure VM. MongoDB Atlas is used for hosting the database.

Technology Choices:

Frontend:
Next.js: Used for building the frontend application due to its server-side rendering capabilities, which enhance performance and SEO.
Tailwind CSS: Utilized for styling the user interface components due to its utility-first approach and ease of customization.
Shards UI: A UI framework used for components like select dropdowns and buttons.
Backend:
Node.js with Express: Chosen for building the backend server due to its lightweight and efficient nature for handling HTTP requests and routing.
MongoDB: Selected as the database for its flexibility and scalability, particularly suitable for storing unstructured or semi-structured data like vehicle records.
Assumptions Made:

Assumed that the vehicle data is stored in a MongoDB database with fields such as licensePlate, make, model, vin, type, date, and milesDriven.
Assumed that the fetchData function aggregates data based on date ranges and frequency using custom aggregation functions for daily, monthly, and yearly totals.
Assumed that the data aggregation functions return an object where keys represent dates or date ranges, and values represent aggregated data.
Backend Controller Functions:

getAllData:

Description: Retrieves all vehicle data from the database and returns specific fields such as license plate, make, model, VIN, type, date, and miles driven.
Route: /api/data
Request Parameters: None
Response: { success: true, data: [vehicles] }
fetchData:

Description: Fetches data based on specified parameters such as report type, frequency, from date, and to date. Aggregates the data according to the selected frequency and calculates the total miles driven, energy consumption, or cost analysis.
Route: /api/report/data
Request Parameters: { reportType, frequency, fromDate, toDate }
Response: { message: "Report Message", data: {reportData}, columns: ["Column1", "Column2", ...] }
Test Cases:

Frontend Test Cases:

DatePicker Component:

Validate correct setting of fromDate and toDate when a date is selected.
Ensure selected date format matches the required format (YYYY-MM-DD).
Verify correct rendering and behavior of the DatePicker component.
Dynamic Table Component:

Test dynamic rendering of table data based on fetched data from the backend API.
Validate display of expected columns and rows according to fetched data.
Verify handling of loading state and error conditions by the table component.
Backend Test Cases:

getAllData:

Test retrieval of all vehicle data from the database.
Validate response status code, data format, and specific fields returned.
fetchData:

Test fetchData function with various combinations of parameters.
Validate returned data format matches expected structure for different report types and frequency settings.
Verify error handling for invalid input parameters and server errors.
References Used:

Previous chats with the assistant for code implementation guidance.
Documentation and tutorials provided by Next.js, Tailwind CSS, Express.js, MongoDB, Vercel, and Azure for understanding and implementing specific features and deployment procedures.
Deployment:

The frontend of the application is deployed on Vercel and can be accessed at https://electrify-it.vercel.app/dashboard/reports.

To Run the Code:

Clone the repository to your local machine:

bash
Copy code
git clone <repository_url>
Navigate to the project directory:

bash
Copy code
cd <project_directory>
Install dependencies for both frontend and backend:

bash
Copy code
cd frontend
npm install
cd ../backend
npm install
Set up environment variables for backend:

Create a .env file in the backend directory.
Define environment variables such as MongoDB connection string, port, etc.
Start the backend server:

sql
Copy code
npm start
Start the frontend development server:

bash
Copy code
cd ../frontend
npm run dev
Access the application in your browser at http://localhost:3000.
