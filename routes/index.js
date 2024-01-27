const express = require('express');
const router = require('express').Router();

// Routes
router.use('/contacts', require('./contacts'));

module.exports = router;
