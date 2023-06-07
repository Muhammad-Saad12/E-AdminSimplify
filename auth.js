const passport = require('passport');
require("dotenv").config();

const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

passport.use(new GoogleStrategy({
    clientID:     process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3001/auth/admin",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {

    if(profile.emails && profile.emails[0].value === process.env.AUTHORIZE_EMAIL){
        console.log(profile.emails)
        return done(null,profile)
    }else{
        return done(null,false)
    }
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return done(err, user);z
    // });
    
  }
));

passport.serializeUser(function(user, done) {
    done(null, user);
  
});

passport.deserializeUser(function(user, done) {
    done(null, user);
  
});