const express = require('express');
const app = express();
const port = 8080;
const cookieParser = require('cookie-parser');
const db = require('./config/mongoose');
const contactVal = require('./models/contact');

app.use(express.urlencoded());
app.use(cookieParser());//setting up cookie parser


app.use('/',require('./routes'));
app.set('view engine','ejs');
app.set('views','./views');

app.post('create_contact',function(req,res){
contactVal.create({
    nameval : req.body.nameval,
    phone: req.body.phone
},function(err,nameAnyThing){
    if(err){
        console.log("########Error##############");
        return;
    }
    console.log("*************",nameAnyThing,"****************");
    return res.redirect('back');
})
});

app.listen(port,function(err){
    if(err){
        console.log(`Error while running server`);
    }
    console.log(`Server is running on port : ${port}`);
});

