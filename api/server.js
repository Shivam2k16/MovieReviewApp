const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),

    

    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./DB'),


    passport = require('passport');
    require('./models/db');
    var routesApi = require('./routes/index');

    var infoRoute = require('./routes/info.route');
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://0.0.0.0:27017/moviereview', { useNewUrlParser: true}).then(
      () => {console.log('Database is connected') },
      err => { console.log('Can not connect to the database'+ err)}
    );


const app = express();
    app.use(bodyParser.json());
    app.use(cors());

    app.use(passport.initialize());
    app.use('/api', routesApi);
    
      
    app.use('/info', infoRoute); 
    
    const port = process.env.PORT || 4000;

    const server = app.listen(port,"0.0.0.0", function(){
     console.log('Listening on port ' + port);
    });

 

module.exports = app;