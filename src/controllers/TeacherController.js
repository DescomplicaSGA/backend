const Teacher = require('../models/Teacher');

module.exports = {

  async index (req, res) {

    const teachers = await Teacher.find();
    res.json(teachers);

  },

  async store (req, res) {
    
    try{

      let teacher = await Teacher.create(req.body);
      res.json({
        type: "success", 
        msg: "Professor cadastrado com sucesso!",
        payload: teacher
      });
    
    } catch(error) {
      
      res.json({
        type: "error", 
        msg: "Não foi possível cadastrar o professor!",
        payload: error
      });

    }

  },

  async findOneTeacher (req, res ) {

    res.json( await Teacher.findOne({ id: req.params.id }) );
    
  },

  async addSchedule (req, res) {

    try {

      const teacher = await Teacher.update(
                      { id: req.params.id },
                      {$push: {avaiability: req.body}
                    });

      res.json({
        type: "success", 
        msg: "Horario cadastrado com sucesso!",
        payload: teacher
      });

    } catch (error) {
      res.json({
        type: "error", 
        msg: "Não foi possível cadastrar o horario!",
        payload: error
      });
    }

  }

}