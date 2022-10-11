const express = require('express');
const app = express();
const port = 8080;
const cookieParser = require('cookie-parser');
const db = require('./config/mongoose');
const session = require('express-session');
const passport =require('passport');
const passportLocal = require('../Codeial/config/passport-local-strategy');
const contactVal = require('./models/contact');

app.use(express.urlencoded());
app.use(cookieParser());//setting up cookie parser


app.use('/',require('./routes'));


//set up view engine
app.set('view engine','ejs');
app.set('views','./views');

app.use(session({
    name:'codeial',
    secret: 'secretKey',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000*60*100)
    }
}));

app.use(passport.initialize());
app.use(passport.session());

