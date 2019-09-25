const express = require('express');
const routes = express.Router();

const StudentControllers = require('./controllers/StudentController');

routes.get('/', (req, res) => {
  res.send('hello');
});

routes.get('/student', StudentControllers.index);

routes.post('/student', StudentControllers.store);

module.exports = routes;