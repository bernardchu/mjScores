function Router( $urlRouterProvider, $stateProvider ) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state( 'main', {
      url: "/",
      templateUrl: "main/main.html",
      controller: 'MainController as Main'
    });
}