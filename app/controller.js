angular.module('footie.controllers',[]).controller('teamsController', function($scope, teamsAPIservice) {
    $scope.nameFilter = '';
    $scope.teamsList = [];
    teamsAPIservice.getTeams()
        .success(function(response){
            //get the data from API
            $scope.teamsList = response.teams;
        })
});