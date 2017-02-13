var app = angular.module('footie', [
    'footie.services',
    'footie.controllers',
    'ngRoute'
    ]);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/teams', {templateUrl: 'templates/teams.html', controller: 'teamsController'})
        .when('/team/:id', {templateUrl: "templates/team.html", controller:"teamController"})
        .otherwise({redirectTo: '/teams'});
}]);