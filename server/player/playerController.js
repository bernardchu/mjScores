function generateRandomPlayers ( count ) {
  var players = [];
  var names = [
    'foo',
    'bar',
    'baz',
    'monkey',
    'banana',
    'bread',
    'face',
    'head',
    'poop',
    'pants'
  ];

  while (count) {
    players.push( {
      name: names[ Math.floor( Math.random() * 10 ) ] + names[ Math.floor(Math.random() * 10) ],
      points: Math.floor( Math.random() * 2000 ),
      id: Math.floor( Math.random() * 1000 ),  
    });
    count--;
  }
  return players;
}


module.exports = {
  fetchAll: function( req, res ) {
    res.status(200).send( generateRandomPlayers( 10 ) );

  },
  fetchById: function( req, res ) {
    var id = req.body.id;
    var player = this._players.filter( function (player) {
      return player.id === id;
    } )[0];
    if (player) {
      res.status( 200 ).send( player );
    } else {
      res.send( 404, 'not found' );
    }
  }
};