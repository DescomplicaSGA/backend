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

    const classes = await Class.find();
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
    const teacher_unavaibility = Unavaiability.find({$and: [{ date: date}, {name: teacher}]});

    for ( let time_avaiable of info_teacher.avaiability){
      
      if ( time_avaiable.day_week === days_of_week[current_dayweek]) {
        
        if( init_meet_schedule.isBetween(moment(`${time_avaiable.init_hour}:00`, format_time)), moment(`${time_avaiable.final_hour}:00`, format_time) ){
          
          if(teacher_schedule.length > 0){
            
            await Class.create(req.body);
            return res.json({'msg': `Existem alunos agendados para essa turma, mas o cadastrado foi feito!`});

          }else{

            if (teacher_unavaibility.length > 0 ){
            
              for (let unavaible of teacher_unavaibility){

                if(init_meet_schedule.isBetween(moment(`${unavaible.init_hour}:00`, format_time)), moment(`${unavaible.final_hour}:00`, format_time) ){

                  return res.json({'msg': `Não foi possível cadastrar a aula`});  

                }

                await Class.create(req.body);
                return res.json({'msg': `Cadastro de aula foi feito com sucesso`});  

              }

            }else{
              
              await Class.create(req.body);
              return res.json({'msg': `Cadastro de aula foi feito com sucesso`});
            
            }

          }
          
        }
      }
    }

    return res.json({'msg': `Não foi possível cadastrar a aula`});  

  }

}