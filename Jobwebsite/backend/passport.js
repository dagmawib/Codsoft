require('dotenv').config()
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require("passport");
const User = require("./User");

passport.use(User.createStrategy());

passport.use(
    new GoogleStrategy(
        {
            clientID:process.env.CLIENT_ID,
            clientSecret:process.env.CLIENT_SECRET,
            callbackURL:"/auth/google/callback",
            scope:["profile","email"]
        },
        function(accessToken, refreshToken, profile, cb) {
            console.log(profile);
            User.findOrCreate({ name:profile.displayName,email: profile.emails, googleId: profile.id }, function (err, user) {
              return cb(err, user);
            });
          })
);

passport.serializeUser((user,done) => {
    done(null,user);
});
passport.deserializeUser((user,done) => {
    done(null,user);
})