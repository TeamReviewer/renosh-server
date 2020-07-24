const https = require('https'); 
const fs = require('fs');
require('dotenv').config();
const express = require('express');
const app = express(); 
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const cookieSession = require('cookie-session');
require('./apis/passport');   // passport.js 의 변수와 설정들을 모두 임포트

// cors
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended:false }));
// parse application/json
app.use(bodyParser.json());
// use cookie, session
app.use(cookieSession({
  name: 'renosh-session',
  keys: ['key1', 'key2']
}))

// 미들웨어 함수
const isLoggedIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
  }
}

const UserRouter = require('./routes/User');
const BookRouter = require('./routes/Book');
const HighRouter = require('./routes/Highlight');
/* const {CosmosClient} = require("@azure/cosmos"); */

app.use('/api/users', UserRouter);
app.use('/api/books', BookRouter);
app.use('/api/highlights', HighRouter);

/*
//connect cosmos DB
const endpoint = process.env.COSMOSDB_ENDPOINT; // Add your endpoint
const key = process.env.COSMOSDB_KEY; // Add the masterkey of the endpoint
const client = new CosmosClient({ endpoint, key });
const database = client.database('renosh');
const container = database.container('user');

const hostname = '127.0.0.1';
const port = 8000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/

// passport
app.use(passport.initialize()); // passport 모듈의 인증 프로세스를 사용하는 함수
app.use(passport.session()); // 인증 정보를 세션에 저장하는 미들웨어 함수 (cookie-session 모듈 필요)
// passport.session은 쿠키를 갖게 되고 passport.js의 passport.deserializer 함수를 호출한다. 

app.get('/', (req, res) => res.send('You are not logged in!'))
app.get('/failed', (req, res) => res.send('You Failed to log in!'))
app.get('/successed', isLoggedIn, (req, res) => res.send(`Welcome ${req.user.displayName}!`))   // req.user는 [object Object] 

app.get('/oauth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/oauth/google/callback', 
  /* passport.authenticate('google', { failureRedirect: '/login' }), */
  passport.authenticate('google', { failureRedirect: '/failed' }),
  function(req, res) {
    // Successful authentication, redirect home.
    /* res.redirect('/'); */
    res.redirect('/successed');
    // 인증에 성공하면 브라우저는 내가 로그인 정보와 일치한 쿠키를 갖고 있는지 체크한다.
    // ( 이전에 passport.js의 GoogleStrategy 의 콜백 트리거가 profile을 반환해줬다. )
  });

app.get('/logout', (req, res) => {
  req.session = null;
  req.logout()
  res.redirect('/'); 
})

/*
app.listen(5000, function(){
  console.log(`app.js is running on port ${5000}`)
})
*/

var sslOptions = { 
  //pfx를 사용하는 경우(pfx파일 경로, 비밀번호를 사용하여 인증하는 경우)
  key : fs.readFileSync('./TEST/private.key'),
  cert: fs.readFileSync('./TEST/private.crt')
}; 
console.log('읽음');

https.createServer(sslOptions, app).listen(5000, function() {
  console.log(`app.js is running on port ${5000}...`);
});