const Student = require('../models/Student');

module.exports = {
  async index (req, res) {

    const students = await Student.find();
    return res.json(students);

  },

  async store (req, res) {
    
    try{

      const student = await Student.create(req.body);
      res.json(student);

    } catch (error) {

      res.json(error);
    
    }

  },
}