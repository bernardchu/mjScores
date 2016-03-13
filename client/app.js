angular.module('mj', ['ngMaterial', 'ui.router', 'ngResource'])
  .controller( 'MainController', MainController )
  .controller( 'AddPlayerController', AddPlayerController )
  .service( 'PlayerResource', PlayerResource )
  .directive( 'activePlayer', activePlayer )
  .config( Router )
  .config( function( $mdThemingProvider ) {
    $mdThemingProvider.theme( 'default' )
      .primaryPalette( 'red' )
      .accentPalette( 'green' );
  });