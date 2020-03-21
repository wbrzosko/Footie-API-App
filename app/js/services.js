angular.module('footie.services',[]).
    factory('teamsAPIservice', function($http){
    var teamsAPI = {};
    var leagueId = 2;
    var currentLeagueId = 524;
    var apiUrl = 'https://api-football-v1.p.rapidapi.com/v2';
    var apiParams = {
        headers: {
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
            "x-rapidapi-key": "e1b652e231msh3ec63a374bdf218p1a86dejsn0dee9ec7967f"
        }
    }
    
    teamsAPI.getTeams = function() {
        return $http({
            method: 'GET',
            url: `${apiUrl}/teams/league/${leagueId}`,
            params: {
                format: 'json',
                json_callback: 'JSON_CALLBACK'
            },
            headers: apiParams.headers
        });
    } 
    teamsAPI.getTeamFixtures = function(id) {
        return $http({
            method: 'GET',
            url: `${apiUrl}/teams/${id}/fixtures`,
            params: {
                format: 'json',
                json_callback: 'JSON_CALLBACK'
            },
            headers: apiParams.headers
            });
    }
    teamsAPI.getTeamInfo = function(id) {
        return $http({
            method: 'GET',
            url: `${apiUrl}/teams/team/${id}`,
            params: {
                format: 'json',
                json_callback: 'JSON_CALLBACK'
            },
            headers: apiParams.headers
            });
    }
    teamsAPI.getTeamPlayers = function(id) {
        return $http({
            method: 'GET',
            url: `http://${apiUrl}/teams/${id}/players`,
            params: {
                format: 'json',
                json_callback: 'JSON_CALLBACK'
            },
            headers: apiParams.headers
            });
    }
    teamsAPI.getTable = function() {
        return $http({
            method: 'GET',
            url: `${apiUrl}/leagueTable/${leagueId}`,
            params: {
                format: 'json',
                json_callback: 'JSON_CALLBACK'
            },
            headers: apiParams.headers
        });
    } 
    teamsAPI.getCurrentRound = function() {
        return $http({
            method: 'GET',
            url: `${apiUrl}/competitions/${leagueId}/leagueTable`,
            params: {
                format: 'json',
                json_callback: 'JSON_CALLBACK'
            },
            headers: apiParams.headers
        });
    }
    teamsAPI.getCurrentRound = function() {
        return $http({
            method: 'GET',
            url: `${apiUrl}/fixtures/rounds/${currentLeagueId}/current`,
            params: {
                format: 'json',
                json_callback: 'JSON_CALLBACK'
            },
            headers: apiParams.headers
        });
    }
    teamsAPI.getFixtures = function(currentRound) {
        return $http({
            method: 'GET',
            url: `${apiUrl}/fixtures/league/${leagueId}/${currentRound}`,
            params: {
                format: 'json',
                json_callback: 'JSON_CALLBACK'
            },
            headers: apiParams.headers
        });
    } 
    return teamsAPI;
});