const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

// Get all contacts
const getAllData = async (req, res, next) => {
    const result = await mongodb.getDb().db('cse341').collection('contacts').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    });
};

// Get a single contact
const getSingleData = async (req, res, next) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db('cse341').collection('contacts').find({ _id: userId });
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]); // selects the id
    });
};

module.exports = { getAllData, getSingleData };