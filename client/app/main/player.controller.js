'use strict';

(function() {

class PlayerController {

//cpi - commonPlayerInfo
//hs - headlineStats
  constructor($http, league, $scope, $location, $stateParams) {
    this.$http = $http;
    this.league = league;
    $scope.league = league;
    $scope.teamImage = undefined;
    $scope.primaryColor = undefined;
    $scope.secondaryColor = undefined;
    $scope.playerId = $stateParams.id;
    $scope.selectedTeamId = undefined;
    $scope.teamId = undefined;
    $scope.team = undefined;
    $scope.cpi = undefined;
    $scope.hs = undefined;
    $scope.gameLogs = [];
    $scope.leagueAvg = undefined;
    $scope.playerAvg = undefined;
    $scope.careerAvg = undefined;
    $scope.careerHigh = undefined;
    $scope.careerTotal = undefined;
    $scope.seasonAvg = undefined;
    $scope.seasonHigh = undefined;


    $scope.tabs = [
      {
        id: 'stats',
        active: false,
        link: 'tab-menu-option-left'
      },
      {
        id: 'info',
        active: true,
        link: 'tab-menu-option-middle'
      },
      {
        id: 'charts',
        active: false,
        link: 'tab-menu-option-right'
      }
    ];

    $scope.getPlayerInfo = function(playerID) {
      $http.get('/api/players/' + playerID).then(response =>{
        $scope.gameLogs = response.data.gameLogs;
        $scope.leagueAvg = response.data.graphLeagueAvg[0];
        $scope.playerAvg = response.data.graphPlayerAvg[0];
        $scope.careerAvg = response.data.overviewCareerAvg[0];
        $scope.careerHigh = response.data.overviewCareerHigh[0];
        $scope.careerTotal = response.data.overviewCareerTotal[0];
        $scope.seasonAvg = response.data.overviewSeasonAvg[0];
        $scope.seasonHigh = response.data.overviewSeasonHigh[0];

        console.log($scope.careerAvg);
        console.log($scope.seasonAvg);


      });
    };

    $scope.getPlayerProfile = function(playerID){
      $http.get('/api/playerStats/' + playerID).then(response =>{
        $scope.hs = response.data.playerHeadlineStats[0];
        $scope.cpi = response.data.commonPlayerInfo[0];
        $scope.teamId = $scope.cpi.teamId;
        $scope.getTeamInfo($scope.teamId);

      });
    };

    $scope.getTeamInfo = function(teamId){
      for(var i = 0; i < $scope.league.length; i++){
        if($scope.league[i].teamId === teamId){
          $scope.selectedTeamId = i;
        }
      }
      $scope.teamImage = $scope.league[$scope.selectedTeamId].img;
      $scope.primaryColor = $scope.league[$scope.selectedTeamId].primaryColor;
      $scope.secondaryColor = $scope.league[$scope.selectedTeamId].secondaryColor;
    };

    $scope.tabIt = function(that){
      var notEl;
      for(var i = 0; i < $scope.tabs.length; i++){
        if($scope.tabs[i].id === that){
          $scope.tabs[i].active = true;
          var el = angular.element(document.querySelector('.' + $scope.tabs[i].link));
          el.addClass('tab-menu-option-selected');
        } else{
          $scope.tabs[i].active = false;
          notEl = angular.element(document.querySelector('.' + $scope.tabs[i].link));
          notEl.removeClass('tab-menu-option-selected');
        }
      }
    };

    $scope.goHome = function(){
      $location.path('/');
    };

    $scope.getPlayerInfo($scope.playerId);
    $scope.getPlayerProfile($scope.playerId);

  }

  }

angular.module('nbaPlaygroundApp')
  .controller('PlayerController', PlayerController);

})();
