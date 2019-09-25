const {Schema, model} = require('mongoose');

const RegisterSchema = new Schema({
  
  day: {
    type: Date,
    required: true
  },

  init_hour: {
    type: Timestamps,
    required: true
  },

  final_hour: {
    type: Timestamps,
    required: true 
  }

});

module.exports = model('register', RegisterSchema)