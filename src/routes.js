const express = require('express');
const routes = express.Router();

const StudentControllers = require('./controllers/StudentController');
const TeacherControllers = require('./controllers/TeacherController');
const ClassControllers = require('./controllers/ClassController');

routes.get('/', (req, res) => {
  res.send('hello');
});

// Students routes
routes.get('/student', StudentControllers.index);
routes.post('/student', StudentControllers.store);

// Teacher routes
routes.get('/teacher', TeacherControllers.index );
routes.get('/teacher/:id', TeacherControllers.findOneTeacher );
routes.post('/teacher',  TeacherControllers.store);
routes.post('/teacher/:id', TeacherControllers.addSchedule);

//Class routes
routes.get('/class', ClassControllers.index);
routes.post('/class', ClassControllers.store);
module.exports = routes;