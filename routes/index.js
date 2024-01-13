const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

// Routes
routes.get('/', lesson1Controller.colbyRoute);
routes.get('/luke', lesson1Controller.lukeRoute);


module.exports = routes;