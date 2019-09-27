const Student = require('../models/Student');

module.exports = {
  async index (req, res) {

    const students = await Student.find();
    return res.json(students);

  },

  async store (req, res) {
    
    try{

      const student = await Student.create(req.body);
      res.json({
        type: "success", 
        msg: "Aluno cadastrado com sucesso!",
        payload: student
      });

    } catch (error) {

      res.json({
        type: "error", 
        msg: "Não foi possível cadastrar o aluno!",
        payload: error
      });
    
    }

  },
}