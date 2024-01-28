const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

// Get all contacts
const getAllData = async (req, res) => {
  const result = await mongodb.getDb().db('cse341').collection('contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

// Get a single contact
const getSingleData = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db('cse341').collection('contacts').find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]); // selects the id
  });
};

// Create a new contact using json data
const createContact = async (req, res) => {
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  const result = await mongodb.getDb().db('cse341').collection('contacts').insertOne(contact);
  if (result.acknowledged) {
    res.status(201).json(result);
  } else {
    res.status(500).json(result.error || 'An error occurred while creating the contact.');
  }
};

// Update a contact using json data
const updateContact = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  const result = await mongodb.getDb().db('cse341').collection('contacts').replaceOne({ _id: userId }, contact);
  if (result.acknowledged) {
    res.status(204).json(result);
  } else {
    res.status(500).json(result.error || 'An error occurred while updating the contact.');
  }
};

// Delete a contact
const deleteContact = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db('cse341').collection('contacts').deleteOne({ _id: userId }, true);
  if (result.deletedCount > 0) {
    res.status(200).json(result);
  } else {
    res.status(500).json(result.error || 'An error occurred while deleting the contact.');
  }
};

module.exports = { getAllData, getSingleData, createContact, updateContact, deleteContact };
