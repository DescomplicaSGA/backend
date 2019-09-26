const {Schema, model} = require('mongoose');

const UnavailabilitySchema = ({

  
  date : {
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
  },

  name: {
    type: Schema.Types.ObjectId,
    ref: 'teacher',
    required: true
  },

});

module.exports = model('unavailability', UnavailabilitySchema);