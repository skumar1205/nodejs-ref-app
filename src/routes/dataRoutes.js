const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

// GET method route
router.get('/', dataController.getData);

// POST method route
router.post('/', dataController.postData);

module.exports = router;