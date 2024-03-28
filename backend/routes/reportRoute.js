// backend/routes/dataRoutes.js

const express = require('express');
const router = express.Router();
const { fetchData } = require('../controllers/reportController');

router.get('/data', fetchData);

module.exports = router;
