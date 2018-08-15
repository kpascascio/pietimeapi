require('dotenv').config();
require('./db');
const express = require('express'); 
const app = express();
const http = require('http').Server(app); 
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json());
app.use('/pie', require('./controllers/piescontroller'));
app.use('/auth', require('./controllers/usercontroller'));
app.use('/shops', require('./controllers/pieshopscontroller'));

require('./associations')

http.listen(process.env.PORT, () => {
    console.log(`server is listening on port ${process.env.PORT}`)
})
