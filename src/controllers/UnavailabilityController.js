const Unavailability = require('../models/Unavailability');

module.exports = {

  async index (req, res){

    const list_unavailabitities = await Unavailability.find();
    res.json(list_unavailabitities);

  },

  async store (req, res){

    try {

      await Unavailability.create(req.body);
      res.json({
        type: "success", 
        msg: "Indisponibilidade cadastrado com sucesso!",
        payload: teacher
      });

    } catch (error){

      res.json({
        type: "error", 
        msg: "Não foi possível cadastrar o indisponibilidade!",
        payload: error
      });

    }

  }

}