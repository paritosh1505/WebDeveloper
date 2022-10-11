const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy

const userVal = require('../models/user');

//authentication using passport
passport.use(new LocalStrategy({
    usernameField:'email'
},
    function(emailtest,password,done){
        //find a user and establish the identity
        userVal.findOne({email:emailtest},function(err,user){
            if(err){
                console.log('Error in findind user using Passport');
                return done(err);
            }
            //if user do not found and passowrd do not match
            if(!user || user.password!= password){
                console.log("Invalid User name and password");
                return done(null,false);
            }
            //if user found
            return done(null,user);

        });
    }
));


//serialize the user to decide which cookie should be kept

passport.serializeUser(function(user,done){
done (null,user.id);
});

//deserlailze the user from the key in the cookie
passport.deserializeUser(function(id,done){
    userVal.findById(id,function(err,user){
        if(err){
            console.log('Error in findind user using Passport');
            return done(err);
        }
        return done(null,user);
    })
    });
    

    module.exports = passport;