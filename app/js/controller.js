angular.module('footie.controllers',[])
    
    /* Controller which displays all the teams */
    .controller('teamsController', function($scope, teamsAPIservice) {
    $scope.nameFilter = '';
    $scope.teamsList = [];
    //$scope.teamId = parseInt(response._links.self.href.text().match(/\d+/)[0], 10);
    teamsAPIservice.getTeams()
        .success(function(response){
            //get the data from API
            $scope.teamsList = response.teams;
        });
    })

    /* Controller which displays a specific team */
    .controller('teamController', function($scope, $routeParams, teamsAPIservice) {
        $scope.id = $routeParams.id;
        $scope.fixtures = [];
        $scope.players = [];
        $scope.team = null;
     
        teamsAPIservice.getTeamFixtures($scope.id)
        .success(function(response){
            $scope.fixtures = response.fixtures;
        });
        teamsAPIservice.getTeamPlayers($scope.id)
        .success(function(response){
           $scope.players = response; 
        });
    });
