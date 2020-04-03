const express = require('express')
const app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const mongoose = require('mongoose')
mongoose.connect('mongodb://heroku_jtftbg15:gvpin4sdkpts92nkcmo9sounur@ds155150.mlab.com:55150/heroku_jtftbg15',
    { useNewUrlParser: true, useUnifiedTopology: true })

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin",
      "https://boiling-bayou-51894.herokuapp.com");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

require('./controllers/quizzes.controller.server')(app)
require('./controllers/questions.controller.server')(app)
require('./controllers/quiz-attempts.controller.server')(app)

app.get('/hello', (req, res) => res.send('hello world!'))

app.listen(process.env.PORT || 5000)

