const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000
const mianPage = require('./routes/index');

//Access direct app's folder, Initialize the main project folder
app.use(express.static(path.join(__dirname,'public')));

//express use body-parser as middle-ware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Connect with the main route
app.use('/',mianPage.routes);

//COrs for cross origin allowance
app.use(cors());

//Set up the server
app.listen(PORT, () => {
    console.log(`Server is up and running on port: ${PORT}`);
});