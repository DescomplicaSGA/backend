const express = require('express');
const app = express()
const bodyParse = require('body-parser');

const PORT = process.env.PORT || 3333;

app.use(bodyParse.urlencoded({extended:true}));
app.use(bodyParse.json());

app.get('/', (req, res) => {
    res.send('Hello World');
})

// Listen an port and runing it in server
app.listen( PORT, () => {
    console.log(`The server is running in port ${PORT}`);
});
