const express = require('express');
const router = express.Router();
const controller = require('../controllers/contacts');

// Route to get all data
router.get('/', controller.getAllData);

// Route to get a single data according to the id in the url
router.get('/:id', controller.getSingleData);

module.exports = router;
