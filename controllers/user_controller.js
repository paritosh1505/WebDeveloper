const userValue = require('../models/user');

module.exports.profile = function(req,res){
    return res.render('user_profile', {
        title:"user profile"
    });
}

module.exports.signUp = function(req,res){
    return res.render('user_sign_up',{
        title:"User signed Up"
    });
}

module.exports.signIn = function(req,res){
    return res.render('user_sign_in',{
        title:"User Sign In"
    });
}

module.exports.create = function(req,res){
 if(req.body.password!= req.body.confirm_bro){
    return res.redirect('back'); 
 }
 userValue.findOne({email:req.body.email},function(err,user){
    if(err){console.log('error in finding user while signing up'); return};
    //if user not found
   // console.log(user.email);
    if(!user){
        userValue.create(req.body,function(err,user){
            console.log(err);
            if(err){console.log("error in creating user while sign up"); return};

            //if no error while creating user then return to sign in page
            return res.redirect('/sign-in')
        });
    }
    else{
        console.log("I am here");
        return res.redirect('back');//go to that page from whre it is coming if user does not create or password do not match
    }

 });
}

// get sign and create the session
module.exports.createSession = function(req,res){

}