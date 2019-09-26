const {Schema, model} = require('mongoose');


const TeacherSchema = new Schema({
  
  name: {
    type: String,
    required: true
  },

  id: {
    type: String,
    required: true
  },

  avaiability: [{
    day_week: {
      type: String,
      required: true
    },
  
    init_hour: {
      type: String,
      required: true
    },
  
    final_hour: {
      type: String,
      required: true 
    }
  }]

}, {
  timestamps: true
});

module.exports = model('teacher', TeacherSchema);