function MainController( $mdSidenav, $mdDialog ) {
  this.players = [];
  this.activePlayers = [];
  this.$mdSidenav = $mdSidenav;
  this.$mdDialog = $mdDialog;
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
  var index = this.activePlayers.indexOf( player );
  if ( index === -1 ) {
    if ( this.activePlayers.length === 4 ) { return; }
    this.activePlayers.push( player );
  } else {
    this.activePlayers.splice( index, 1 );
  }
  player.active = !player.active;
}

MainController.prototype.addPlayer = function ( ev ) {
  var _this = this;
  this.$mdDialog.show({
      controller: 'AddPlayerController as AddPlayer',
      templateUrl: '/main/partials/addPlayer.html',
      // parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: true
    })
    .then( function( name ) {
      var player = {
        name: name,
        points: 1000,
        active: false
      };
      _this.players.push( player );
      _this.togglePlayer( player );
    }, function() {
      console.log( 'cancelled' );
    } );
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