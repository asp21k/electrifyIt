const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import cors package

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

const connectionString = process.env.MONGODB_URI;
mongoose.connect(connectionString, {
    dbName: process.env.DB_NAME,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected successfully'))
.catch(error => console.error('MongoDB connection error:', error));

// Apply CORS middleware
app.use(cors({
  origin: 'https://electrify-it.vercel.app/' // Allow requests from localhost:3000
}));

// Routes (placeholder for now)
app.get('/', (req, res) => {
    res.send('ElectrifyIt Reports Backend API');
});

// Error handling middleware (add more specific error handling as needed)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
});

app.use('/report', require('./routes/reportRoute'));

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
