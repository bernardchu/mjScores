function activePlayer () {
  return {
    restrict: 'E',
    scope: {
      player: '='
    },
    replace: true,
    templateUrl: '/directives/activePlayer/activePlayer.html'
  }
}