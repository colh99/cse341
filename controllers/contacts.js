const mongodb = require('../db/connect');

// Get all contacts
const getAllData = async (req, res, next) => {
    const result = await mongodb
        .getDb()
        .db('cse341')
        .collection('contacts')
        .find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    });
};

// Get a single contact
const getSingleData = async (req, res, next) => {
    const result = await mongodb
        .getDb()
        .db('cse341')
        .collection('contacts')
        .find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[req.params.id]); // selects the id
    });
};

module.exports = { getAllData, getSingleData };