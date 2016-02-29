'use strict';

(function() {

class PlayerController {

//cpi - commonPlayerInfo
//hs - headlineStats
  constructor($http, $timeout, league, playerTabs, playerSplits, playerSplitsStats, playerTenData, playerTenStats, $scope, $location, $stateParams) {
    this.$http = $http;
    this.league = league;
    this.stats = playerSplitsStats;
    this.stats10 = playerTenStats;
    $scope.stats = this.stats;
    $scope.stats10 = this.stats10;
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
    $scope.leagueAvg = undefined;
    $scope.playerAvg = undefined;
    $scope.careerAvg = undefined;
    $scope.careerHigh = undefined;
    $scope.careerTotal = undefined;
    $scope.seasonAvg = undefined;
    $scope.seasonHigh = undefined;
    $scope.tabs = playerTabs;
    $scope.playerSplits = playerSplits;
    $scope.player10 = playerTenData;
    $scope.selectedStatSplits = this.stats[0].id;
    $scope.selectedStatTen = this.stats10[0].id;
    $scope.progressChartSizeXLarge = 160;
    $scope.progressChartSizeLarge = 125;
    $scope.progressChartSizeMedium = 100;
    $scope.progressChartSizeSmall = 80;
    $scope.progressChartSizeXSmall = 60;
    $scope.pctSelected10 = undefined;
    $scope.pctSelectedSplits = undefined;
    $scope.pctData10 = [ 0.0, 0.0, 0.0];
    $scope.pctDataSplits = [ 0.0, 0.0, 0.00];
    $scope.pctStats10 = [];
    $scope.stats10Select = [];
    $scope.gameLogs = [];


    $scope.$watch('selectedStatTen', function(newVal){
      if(newVal && $scope.gameLogs.length > 1){
        console.log('selectedstatt10');
        $scope.getPlayerTenData(newVal);
      }
    });

    $scope.$watch('selectedStatSplits', function(newVal){
      if(newVal && $scope.seasonAvg !== undefined){
        $scope.getPlayerSplitsData(newVal);
      }
    });

    $scope.$watch('seasonHigh', function(newVal){
      if(newVal){
        $scope.getPlayerSplitsData($scope.selectedStatSplits);
      }
    });

    $scope.$watch('gameLogs', function(){
      if($scope.gameLogs.length > 1){
        $scope.getPlayerTenData($scope.selectedStatTen);
        $scope.pctSelected10 = $scope.gameLogs[0].gameId;
      }
    });

    $scope.$watch('pctSelected10', function(){
      if($scope.gameLogs.length > 1){
        $scope.getPctDataTen();
      }
    });

    $scope.$watch('pctSelectedSplits', function(){
      if($scope.pctStats10.length > 0){
        $scope.getPctDataSplits();
      }
    });


    $scope.getPlayerStats = function(playerID) {
      $http.get('/api/playerStats/' + playerID).then(response =>{
        $scope.gameLogs = response.data.gameLogs;
        $scope.careerAvg = response.data.overviewCareerAvg[0];
        $scope.careerHigh = response.data.overviewCareerHigh[0];
        $scope.careerTotal = response.data.overviewCareerTotal[0];
        $scope.seasonAvg = response.data.overviewSeasonAvg[0];
        $scope.seasonHigh = response.data.overviewSeasonHigh[0];

      });
    };

    $scope.getPlayerInfo = function(playerID){
      $http.get('/api/players/' + playerID).then(response =>{
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

    $scope.getPlayerSplitsData = function(statId){
      var stat = statId;
      $scope.playerSplits = [];
      var seasonAvg = $scope.seasonAvg;
      var careerAvg = $scope.careerAvg;
      var seasonHigh = $scope.seasonHigh;
      var careerHigh = $scope.careerHigh;
      $scope.pctStats10.push(seasonAvg, careerAvg, seasonHigh, careerHigh);

      $scope.playerSplits = [
        {
          name: 'Season Average',
          stat: seasonAvg[stat]
        },
        {
          name: 'Career Average',
          stat: careerAvg[stat]
        },
        {
          name: 'Season High',
          stat: seasonHigh[stat]
        },
        {
          name: 'Career High Average',
          stat: careerHigh[stat]
        }

      ];
      if($scope.pctSelectedSplits === undefined){
        $scope.pctSelectedSplits = $scope.playerSplits[0].name;
      }
    };

    $scope.initTabs = function(){
      $scope.tabs[0].active = false;
      $scope.tabs[1].active = true;
      $scope.tabs[2].active = false;
    };

    $scope.getPlayerTenData = function(statId){
      var stat = statId;
      $scope.player10 = [];

      for(var i = $scope.gameLogs.length -1 ; i >= 0; i--){
        var obj = {
          name: $scope.gameLogs[i].gameDate + ' '+
                $scope.gameLogs[i].matchup + ' - ' +
                $scope.gameLogs[i].wl,
          stat: $scope.gameLogs[i][stat]
        };
        $scope.player10.push(obj);
      }

    };

    $scope.getPctDataTen = function(){
      $scope.pctData10 = [];
      for(var i = 0; i < $scope.gameLogs.length; i++){
        if($scope.gameLogs[i].gameId === $scope.pctSelected10){
          $scope.pctData10.push($scope.gameLogs[i].fgPct);
          $scope.pctData10.push($scope.gameLogs[i].fg3Pct);
          $scope.pctData10.push($scope.gameLogs[i].ftPct);
        }
      }
    };

    $scope.getPctDataSplits = function(){
      $scope.pctDataSplits = [];
          for(var i = 0; i < $scope.playerSplits.length; i++){
            if($scope.pctSelectedSplits === $scope.playerSplits[i].name){
              $scope.pctDataSplits.push($scope.pctStats10[i].fgPct);
              $scope.pctDataSplits.push($scope.pctStats10[i].fg3Pct);
              $scope.pctDataSplits.push($scope.pctStats10[i].ftPct);
            }
          }
    };

    $scope.goHome = function(){
      $location.path('/');
    };

    $scope.getPlayerStats($scope.playerId);
    $scope.getPlayerInfo($scope.playerId);
    $scope.initTabs();
  }

  }

angular.module('nbaPlaygroundApp')
  .controller('PlayerController', PlayerController);

})();
