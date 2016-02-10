'use strict';

(function() {

class MainController {

  constructor($http, league, $scope) {
    this.$http = $http;
    this.awesomeThings = [];
    this.league = league;
    $scope.selectedTeam = 'Pick a Team';
    $scope.selectedTeamId = -1;
    $scope.league = league;
    $scope.teamImage = 'nbangular.png';
    $scope.primaryColor = '#aeaeae';
    $scope.secondaryColor = '#ffffff';
    $scope.teamID = 0;
    $scope.roster = undefined;
    $scope.coaches = undefined;
    $scope.teamStats = undefined;
    $scope.teamInfo = undefined;

    //watches select of teams and updates info
    $scope.$watch('selectedTeam', function(newVal, oldVal){
      if(newVal !== oldVal){

        for(var i = 0; i < $scope.league.length; i++){
          if($scope.league[i].teamName === newVal){
            $scope.selectedTeamId = i;
          }
        }
        $scope.teamImage = $scope.league[$scope.selectedTeamId].img;
        $scope.primaryColor = $scope.league[$scope.selectedTeamId].primaryColor;
        $scope.secondaryColor = $scope.league[$scope.selectedTeamId].secondaryColor;
        $scope.teamID = $scope.league[$scope.selectedTeamId].teamId;
        $scope.getRoster($scope.teamID);
        $scope.getTeamStats($scope.teamID);

      }
    });

    $scope.getRoster = function(teamID) {
      $http.get('/api/rosters/' + teamID).then(response =>{
        $scope.coaches = response.data.commonTeamRoster;
        $scope.roster = response.data.commonTeamRoster;
      });
    };

    $scope.getTeamStats = function(teamID){
      $http.get('/api/teamStats/' + teamID).then(response =>{
        $scope.teamStats = response.data.teamSeasonRanks[0];
        $scope.teamInfo = response.data.teamInfoCommon[0];
        console.log($scope.teamStats);
        console.log($scope.teamInfo);

      });
    };
  }

  }

angular.module('nbaPlaygroundApp')
  .controller('MainController', MainController);

})();
