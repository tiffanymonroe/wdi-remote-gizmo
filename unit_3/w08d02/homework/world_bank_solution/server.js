/*******************************************
Dependencies
*******************************************/
const express        = require('express'),
      bodyParser     = require('body-parser'),
      mongoose       = require('mongoose'),
      port           = process.env.PORT|| 3000 ,
      app            = express();

/*******************************************
Database
*******************************************/
mongoose.connect('mongodb://localhost/world_bank_loan_app');

/*******************************************
Middleware
*******************************************/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

/*******************************************
Controllers
*******************************************/
var wbinfoController = require('./controllers/wbinfoController');
var seedController = require('./controllers/seedController');

app.use('/wbinfo', wbinfoController);
app.use('/seed', seedController);

/*******************************************
Listener
*******************************************/
app.listen(port, () => {
    console.log('=======================');
    console.log('Running on port ' + port);
    console.log('=======================');
});
