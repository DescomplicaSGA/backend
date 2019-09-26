const Unavailability = require('../models/Unavailability');

module.exports = {

  async index (req, res){

    const list_unavailabitities = await Unavailability.find();
    res.json(list_unavailabitities);

  },

  async store (req, res){

    try {

      await Unavailability.create(req.body);
      res.json({"msg": `Cadastro realizado com sucesso`});

    } catch (error){

      res.json({"msg": `Não foi possível cadastrar indisponibilidade`});

    }

  }

}