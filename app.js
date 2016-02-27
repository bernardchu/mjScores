angular.module('mj', ['ngMaterial', 'ui.router'])
  .controller( 'MainController', MainController )
  .controller( 'AddPlayerController', AddPlayerController )
  .config( Router )
  .config( function( $mdThemingProvider ) {
    $mdThemingProvider.theme( 'default' )
      .primaryPalette( 'red' )
      .accentPalette( 'green' );
  });