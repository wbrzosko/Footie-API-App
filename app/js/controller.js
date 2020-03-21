angular.module('footie.controllers',[])
    
    /* Controller which displays all the teams */
    .controller('teamsController', function($scope, teamsAPIservice) {
    $scope.nameFilter = '';
    $scope.teamsList = [];
    teamsAPIservice.getTeams()
        .success(function(response){
            //get the data from API
            $scope.teamsList = response.api.teams;
        });
    })

    /* Controller which displays a specific team */
    .controller('teamController', function($scope, $routeParams, teamsAPIservice) {
        $scope.id = $routeParams.id;
        $scope.fixtures = [];
        $scope.team = null;
        // Get team information
        teamsAPIservice.getTeamInfo($scope.id)
        .success(function(response){
            $scope.team = response;
        });
        // Get team's fixtures
        teamsAPIservice.getTeamFixtures($scope.id)
        .success(function(response){
            $scope.fixtures = response.fixtures;
        });
    })

    /* Controller which displays a list of players */
    .controller('playersController', function($scope, $routeParams, teamsAPIservice) {
        $scope.id = $routeParams.id;
        $scope.players = [];
        $scope.team = null;
        // Get team information
        teamsAPIservice.getTeamInfo($scope.id)
        .success(function(response){
            $scope.team = response;
        });
        // Get team's players
        teamsAPIservice.getTeamPlayers($scope.id)
        .success(function(response){
            $scope.players = response.players; 
        });
    })

    /* Controller which displays table with results */
    .controller('tableController', function($scope, teamsAPIservice) {
    $scope.nameFilter = '';
    $scope.teamsList = [];
    teamsAPIservice.getTable()
        .success(function(response){
            //get the data from API
            $scope.teamsList = response.api.standings[0];
        });
    })

    /* Controller which displays all the teams */
    .controller('fixturesController', function($scope, teamsAPIservice) {
        $scope.fixtures = [];
        
        teamsAPIservice.getCurrentRound()
        .success(response => {
            teamsAPIservice.getFixtures(response.api.fixtures[0])
            .success(function(response){
                //get the data from API
                $scope.fixtures = response.api.fixtures;
            });
        })
    });

        

    
