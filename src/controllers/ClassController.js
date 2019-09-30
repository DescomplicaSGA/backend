const Class = require('../models/Class');
const Teacher = require('../models/Teacher');
const Unavaiability = require('../models/Unavailability');

const moment = require('moment');

const format_time = 'hh:mm:ss';

var days_of_week = {
  "1": "segunda",
  "2": "terça",
  "3": "quarta",
  "4": "quinta",
  "5": "sexta",
  "6": "sabado",
  "7": "domingo"
};

module.exports = {

  async index (req, res) {

    const classes = await Class.find().populate('student').populate('teacher');
    res.json(classes);

  },

  async store ( req, res ) {

    const { date, init_hour, final_hour , teacher } = req.body;

    const info_teacher = await Teacher.findById(teacher);
    
    // init schedule of meet
    var init_meet_schedule = moment(`${init_hour}:00`,format_time);

    // all the schedule for that day 
    const teacher_schedule = await Class.find({$and: [{ date : date}, {teacher: teacher}]});
    
    // return the number in day week
    var current_dayweek = moment(date).weekday();

    // return the number of Univaibility with current teacher
    const teacher_unavaibility = await Unavaiability.find({ name: teacher });

    for ( let time_avaiable of info_teacher.avaiability){
      
      if ( time_avaiable.day_week === days_of_week[current_dayweek]) {

        if( init_meet_schedule.isBetween(moment(`${time_avaiable.init_hour}:00`, format_time)), moment(`${time_avaiable.final_hour}:00`, format_time) ){

          if(teacher_schedule.length > 0){

            await Class.create(req.body);
            return res.json({
              type: "warning", 
              msg: `Existem alunos agendados para essa aula, mas o cadastrado foi feito!`,
              payload: req.body
            });

          }else{

            if (teacher_unavaibility.length > 0 ){
              

              console.log(teacher_unavaibility);

              for (let unavaible of teacher_unavaibility){

                if(init_meet_schedule.isBetween(moment(`${unavaible.init_hour}:00`, format_time)), moment(`${unavaible.final_hour}:00`, format_time) ){

                  return res.json({
                    type: "error", 
                    msg: `Professor ausente no momento!`,
                    payload: req.body
                  });  

                } 

              }

              await Class.create(req.body);
                return res.json({
                  type: "success", 
                  msg: "Aula cadastrada com sucesso!",
                  payload: req.body
              }); 

            }else{
              
              await Class.create(req.body);
              return res.json({
                type: "success", 
                msg: "Aula cadastrada com sucesso!",
                payload: req.body
              });
            
            }

         }
          
        }
      }
    }

    return res.json({
      type: "error", 
      msg: "Não foi possível cadastrar a aula!",
      payload: req.body
    });  

  }

}