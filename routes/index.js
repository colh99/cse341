const express = require('express');
const router = express.Router();

// Routes
router.use('/', require('./swagger'));
router.use('/contacts', require('./contacts'));

module.exports = router;
