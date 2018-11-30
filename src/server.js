const express = require('express')
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express()
const models = require('./models/index');

// Decode json and x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Add a bit of logging
app.use(morgan('short'))
/*
// Get all the users defined
app.get('/', function (req, res) {
  models.User.findAll()
    .then((users) => {
      res.json(users)
    })
})
console.log('Jul le Sang')

// Add a new user to the database
app.post('/', function(req, res) {
  models.User.create({
    username: req.body.username
  })
    .then(() => {
      res.send('User added !')
    })
})
*/
// Synchronize models

app.get('/', function (req, res) {
  console.log("Elo waurld")
})
//models.sequelize.sync().then(function() {
  app.listen(process.env.PORT, function() {
    console.log('Express server listening on port 3000');
  });
//});

console.log('Jul ma religion')
