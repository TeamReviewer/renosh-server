require('dotenv').config();
const passport = require('passport');
const { User } = require('@azure/cosmos');
// const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser(function(user, done) {
    /* done(null, user.id);   // 쿠키를 작게 만들기 위해 user.id를 받는다. */
    done(null, user);   // 현재는 user 정보 전체를 쿠키에 넣는다. 이후 app.js의 /oauth/google/callback 을 건드린다.
});

/* passport.deserializeUser(function(id, done) {   // passport.session로부터 쿠키의 id를 받는다. */
passport.deserializeUser(function(user, done) {
    /*
    User.findById(id, function(err, user){   // DB에 쿠키 id가 있는지 찾고 user의 모든 정보를 select 한다.
        done(err, user);
    })
    */
    return done(null, user); // 현재는 디비를 건드리지 않는다.
});

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GoogleClientID,
            clientSecret: process.env.GoogleClientSecret,
            callbackURL: process.env.GoogleCallbackURL
        },
    // 인증에 대한 확인 콜백 트리거
    function(accessToken, refreshToken, profile, done) {
        console.log('GoogleStrategy', accessToken, refreshToken, profile);
        // 내 DB에 회원이 등록돼있는지 확인하기 위해 프로필 정보(주로 profile.id)를 사용한다
        // profile은 객체형태의 정보. 없으면 create, 존재하면 select해서 user를 패스한다. 
        /*
        User.findOrCreate({ googleId: profile.id }, function (err, user) {
          return done(err, user);
        });
        */
        return done(null, profile); // 현재는 디비를 건드리지 않는다.
        // 완료되면 passport.serializeuser 함수를 호출한다. 
    }
  ));

