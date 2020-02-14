const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const weatherRoute = require('./routes/weatherRoute');
const favoritesRoute = require('./routes/favoritesRoute');

const mongoDB = 'mongodb+srv://sany2012w:kbwtq366@cluster0-oduxw.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoDB, //mongodb+srv://sany2012w:<password>@cluster0-oduxw.mongodb.net/test?retryWrites=true&w=majority
{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to database');
}).catch((e) => {
  console.log('Error connecting to database');
});

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
weatherRoute(app);
favoritesRoute(app);

app.listen(3001, function(e){
    if(e) {
      console.error(e);
    }
    else {
      console.log('Running server at port 3001') ;
    }
});
