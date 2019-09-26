const express = require('express');
const routes = express.Router();

const StudentControllers = require('./controllers/StudentController');
const TeacherControllers = require('./controllers/TeacherController');
const ClassControllers = require('./controllers/ClassController');
const SearchControllers = require('./controllers/SearchController');
const UnavaibilityControllers = require('./controllers/UnavailabilityController');

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

// Search routes
routes.post('/search/teacher', SearchControllers.search_teacher);
routes.post('/search/student', SearchControllers.search_student);

// Unavaibilities routes
routes.get('/unavaibility', UnavaibilityControllers.index);
routes.post('/unavaibility', UnavaibilityControllers.store);

module.exports = routes;