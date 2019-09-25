const express = require('express');
const app = express()
const PORT = process.env.PORT || 3333;

app.get('/', (req, res) => {
    res.send('Hello World');
})

// Listen an port and runing it in server
app.listen( PORT, () => {
    console.log(`The server is running in port ${PORT}`);
});