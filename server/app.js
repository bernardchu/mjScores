var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var playerRouter = express.Router();
app.use( '/api/player', playerRouter );
require('./player/playerRoutes')(playerRouter);

app.use(express.static("../client"));

app.listen( port, function () {
  console.log('Listening on port 3000');
} );