angular.module('footie.services',[]).
    factory('teamsAPIservice', function($http){
    var teamsAPI = {};
    var competitionId = 2055;
    
    teamsAPI.getTeams = function() {
        return $http({
            method: 'GET',
            url: `http://api.football-data.org/v1/competitions/${competitionId}/teams`,
            params: {
                format: 'json',
                json_callback: 'JSON_CALLBACK'
            },
            headers: {'X-Auth-Token':'e56f76ecae3744739e74519f39d8587d'}
        });
    } 
    teamsAPI.getTeamFixtures = function(id) {
        return $http({
            method: 'GET',
            url: `http://api.football-data.org/v1/teams/${id}/fixtures`,
            params: {
                format: 'json',
                json_callback: 'JSON_CALLBACK'
            },
            headers: {'X-Auth-Token':'e56f76ecae3744739e74519f39d8587d'}
            });
    }
    teamsAPI.getTeamInfo = function(id) {
        return $http({
            method: 'GET',
            url: `http://api.football-data.org/v1/teams/${id}`,
            params: {
                format: 'json',
                json_callback: 'JSON_CALLBACK'
            },
            headers: {'X-Auth-Token':'e56f76ecae3744739e74519f39d8587d'}
            });
    }
    teamsAPI.getTeamPlayers = function(id) {
        return $http({
            method: 'GET',
            url: `http://api.football-data.org/v1/teams/${id}/players`,
            params: {
                format: 'json',
                json_callback: 'JSON_CALLBACK'
            },
            headers: {'X-Auth-Token':'e56f76ecae3744739e74519f39d8587d'}
            });
    }
    teamsAPI.getTable = function() {
        return $http({
            method: 'GET',
            url: `http://api.football-data.org/v1/competitions/${competitionId}/leagueTable`,
            params: {
                format: 'json',
                json_callback: 'JSON_CALLBACK'
            },
            headers: {'X-Auth-Token':'e56f76ecae3744739e74519f39d8587d'}
        });
    } 
    return teamsAPI;
});