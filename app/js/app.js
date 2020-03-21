var app = angular.module('footie', [
    'footie.services',
    'footie.controllers',
    'ngRoute'
    ]);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/teams', {templateUrl: 'templates/teams.html', controller: 'teamsController'})
        .when('/team/:id', {templateUrl: "templates/team.html", controller:"teamController"})
        .when('/team/:id/players', {templateUrl: "templates/players.html", controller:"playersController"})
        .when('/table', {templateUrl: 'templates/table.html', controller: 'tableController'})
        .when('/fixtures', {templateUrl: 'templates/fixtures.html', controller: 'fixturesController'})
        .otherwise({redirectTo: '/table'});
}]);