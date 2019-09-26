const {Schema, model} = require('mongoose');

const ClassSchema = new Schema({

  meet: {
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
  },

  teacher: {
    type: Schema.Types.ObjectId,
    ref: 'teacher'
  },

  student: [{
    type: Schema.Types.ObjectId,
    ref: 'student'
  }]

});

module.exports = model('class', ClassSchema);