const express = require('express');
const router = express.Router();
const controller = require('../controllers/contacts');

// Route to READ all data
router.get('/', controller.getAllData);

// Route to READ a single data according to the id in the url
router.get('/:id', controller.getSingleData);

// Route to CREATE a new contact
router.post('/', controller.createContact);

// Route to UPDATE a contact
router.put('/:id', controller.updateContact);

// Route to DELETE a contact
router.delete('/:id', controller.deleteContact);

module.exports = router;
