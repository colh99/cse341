const express = require('express');
const router = express.Router();

// Routes
router.use('/contacts', require('./contacts'));

module.exports = router;
