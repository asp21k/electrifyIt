// backend/routes/dataRoutes.js

const express = require('express');
const router = express.Router();
const { fetchData, getAllData, fetchDataB } = require('../controllers/reportController');

router.get('/data', fetchData);
router.get('/dataB', fetchDataB);
router.get('/', getAllData);

module.exports = router;
