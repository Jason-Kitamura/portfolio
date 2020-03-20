const express = require( "express" );
const bodyParser = require('body-parser');
const AWS = require('aws-sdk');


const PORT = process.env.PORT || 8080;
const app = express();


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.listen( PORT, function(){
    console.log( `RUNNING, http://localhost:${PORT}` ); });