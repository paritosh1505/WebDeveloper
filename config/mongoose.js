const mongoose = require('mongoose');

//connect to db
mongoose.connect('mongodb://localhost/my_first_db');

// check if connection is succesful
const db_test = mongoose.connection;

//error
db_test.on('error',console.error.bind(console,"Error Connecting DB"));

//up and running print the message
db_test.once('open',function(){
    console.log("Succesfully Connected DB")
});