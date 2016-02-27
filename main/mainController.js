function MainController( $mdSidenav ) {
  this.players = [];
  this.activePlayers = [];
  this.$mdSidenav = $mdSidenav;
  this.generateRandomPlayers( 10 );
}

MainController.prototype.generateRandomPlayers = function ( count ) {
  while (count) {
    this.players.push( {
      name: this.names[ Math.floor( Math.random() * 10 ) ] + this.names[ Math.floor(Math.random() * 10) ],
      points: Math.floor( Math.random() * 2000 ),
      active: false
    });
    count--;
  }
}

MainController.prototype.toggleRight = function () {
  this.$mdSidenav( 'playerList' ).toggle();
}

MainController.prototype.togglePlayer = function ( player ) {
  player.active = !player.active;
  var index = this.activePlayers.indexOf( player );
  if ( index === -1 ) {
    if ( this.activePlayers.length === 4 ) { return; }
    this.activePlayers.push( player );
  } else {
    this.activePlayers.splice( index, 1 );
  }
}

MainController.prototype.names = [
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