angular.module('mj', ['ngMaterial', 'ui.router'])
  .controller( 'MainController', MainController )
  .controller( 'AddPlayerController', AddPlayerController )
  .directive( 'activePlayer', activePlayer )
  .config( Router )
  .config( function( $mdThemingProvider ) {
    $mdThemingProvider.theme( 'default' )
      .primaryPalette( 'red' )
      .accentPalette( 'green' );
  });