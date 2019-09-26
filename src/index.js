const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3333;

// connect to database
require('./services/dbConfig');
const routes = require('./routes');

// middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use(routes);

// Listen an port and runing it in server
app.listen( PORT, () => {
    console.log(`The server is running in port ${PORT}`);
});
