var leagueGame = angular.module('leagueGame', [
  'ngRoute',
  'LeagueGameControllers',
]);

leagueGame.config( ['$routeProvider', function($routeProvider) {

  $routeProvider.
  when ('/events',{
    templateUrl: 'partials/leaguegame/events.html',
    controller: 'EventController'
  }).
  when ('/gamestat',{
    templateUrl: 'partials/leaguegame/gamestat.html',
    controller: 'GameStatController'
  }).
  when('/playerstat', {
    templateUrl: 'partials/leaguegame/playerstat.html',
    controller: 'PlayerStatController'
  }).
  otherwise({
    redirectTo: '/events'
  });
}]);
