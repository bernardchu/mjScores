function MainController( $mdSidenav, $mdDialog, PlayerResource ) {
  this.players = [];
  this.activePlayers = [];
  this.$mdSidenav = $mdSidenav;
  this.$mdDialog = $mdDialog;
  var _this = this;
  PlayerResource.query()
    .then( function ( players ) {
      _this.players = players;
    } )
    .catch( function ( error ) {
      console.log('error fetching players');
    } )
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
    this.unsetWinner( player );
    this.unsetLoser( player );
  }
}

MainController.prototype.setWinner = function( player ) {
  this.winnerId = player.id;
  this.unsetLoser( player );
};

MainController.prototype.setLoser = function( player ) {
  this.loserId = player.id;
  this.unsetWinner( player );
};

MainController.prototype.unsetLoser = function( player ) {
  if (this.loserId === player.id) {
    this.loserId = null;
  }
};

MainController.prototype.unsetWinner = function( player ) {
  if (this.winnerId === player.id) {
    this.winnerId = null;
  }
};

MainController.prototype.isWinner = function( player ) {
  return this.winnerId === player.id;
};

MainController.prototype.isLoser = function( player ) {
  return this.loserId === player.id;
};

MainController.prototype.addPlayer = function ( ev ) {
  var _this = this;
  this.$mdDialog.show({
      controller: 'AddPlayerController as AddPlayer',
      templateUrl: '/main/partials/addPlayer.html',
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: true
    })
    .then( function( name ) {
      var player = {
        id: Math.floor( Math.random() * 1000 ),
        name: name,
        points: 1000
      };
      _this.players.push( player );
      _this.togglePlayer( player );
    }, function() {
      console.log( 'cancelled' );
    } );
}

MainController.prototype.isPlayerActive = function ( player ) {
  return this.activePlayers.indexOf( player ) !== -1;
};
