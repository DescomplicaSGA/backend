require('dotenv').config(); 
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_MONGO, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
}, () => {
  console.log(`Mongo is connected`);
});
