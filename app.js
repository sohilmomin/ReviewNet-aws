var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
//auth
const session = require('express-session')
const FileStore = require('session-file-store')(session)

const passport = require('passport')
const { MONGOURI } = require('./config/keys')

//mongoDB
const mongoose = require('mongoose')

const userRouter = require('./routes/users')
const companyRouter = require('./routes/company')
const reviewRouter = require('./routes/reviews')
const productRouter = require('./routes/products')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: false }));
app.use(cookieParser());

//auth
app.use(session({
  name: 'session-id',
  secret: '12345-67890-09876-54321',
  saveUninitialized: false,
  resave: false,
  store: new FileStore()
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/users', userRouter)
app.use('/company', companyRouter)
app.use('/reviews', reviewRouter)
app.use('/products', productRouter)

//HEROKU DEPLOY CODE
if (process.env.NODE_ENV == "production") {
  app.use(express.static('client/build'))
  const path = require('path')
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

const connect = mongoose.connect(MONGOURI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});
connect.then((db) => {
  console.log("Connected with MonogoDB");
}, (err) => { console.log(err); });

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
