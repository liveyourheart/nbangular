'use strict';

(function() {

class MainController {

  constructor($http, league, stats, tsData, teamTabs, $scope, $location) {
    this.$http = $http;
    this.awesomeThings = [];
    this.league = league;
    this.stats = stats;
    $scope.selectedStat = this.stats[0].id;
    $scope.selectedTeam = 'Pick a Team';
    $scope.selectedTeamId = -1;
    $scope.league = league;
    $scope.teamImage = 'nbangular.c83fa3b7.png';
    $scope.primaryColor = '#797979';
    $scope.secondaryColor = '#fff';
    $scope.teamID = 1610612760;
    $scope.roster = undefined;
    $scope.coaches = undefined;
    $scope.teamStats = undefined;
    $scope.teamInfo = undefined;
    $scope.teamDashboard = undefined;
    $scope.tsData = tsData;
    $scope.tabs = teamTabs;

    //watches select of teams and updates info
    $scope.$watch('selectedTeam', function(newVal, oldVal){
      if(newVal && newVal != 'Pick a Team'){

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
        $scope.getTeamDashboard($scope.teamID);
      }
    });

    $scope.$watch('selectedStat', function(newVal){
      if(newVal){
        $scope.getTeamSplitsData(newVal);
      }


    });

    $scope.$watch('teamDashboard', function(newVal, oldVal){
      $scope.getTeamSplitsData($scope.selectedStat);
    });

    $scope.getTeamDashboard = function(teamID){
      $http.get('/api/teamSplits/' + teamID).then(response =>{
        $scope.teamDashboard = response.data;
      });
    };

    $scope.getRoster = function(teamID) {
      $http.get('/api/rosters/' + teamID).then(response =>{
        $scope.coaches = response.data.coaches;
        $scope.roster = response.data.commonTeamRoster;
      });
    };

    $scope.getTeamStats = function(teamID){
      $http.get('/api/teamStats/' + teamID).then(response =>{
        $scope.teamStats = response.data.teamSeasonRanks[0];
        $scope.teamInfo = response.data.teamInfoCommon[0];
      });
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

    $scope.initTabs = function(){
      $scope.tabs[0].active = false;
      $scope.tabs[1].active = true;
      $scope.tabs[2].active = false;

    }

    $scope.goToPlayer = function(playerID){
      $location.path('/' + playerID);
    };

    $scope.getTeamSplitsData = function(statId){
      var stat = statId;
      $scope.tsData = [];
      if($scope.teamDashboard == undefined){
        $scope.tsData = tsData;
        return;
      }
      var oa = $scope.teamDashboard.overallTeamDashboard[0][stat];
      var w = $scope.teamDashboard.winsLossesTeamDashboard[0][stat];
      var l = $scope.teamDashboard.winsLossesTeamDashboard[1][stat];
      var h = $scope.teamDashboard.locationTeamDashboard[0][stat];
      var a = $scope.teamDashboard.locationTeamDashboard[1][stat];
      var oct = $scope.teamDashboard.monthTeamDashboard[0][stat];
      var nov = $scope.teamDashboard.monthTeamDashboard[1][stat];
      var dec = $scope.teamDashboard.monthTeamDashboard[2][stat];
      var jan = $scope.teamDashboard.monthTeamDashboard[3][stat];
      var feb = $scope.teamDashboard.monthTeamDashboard[4][stat];
      var b2b = $scope.teamDashboard.daysRestTeamDashboard[0][stat];
      var day1 = $scope.teamDashboard.daysRestTeamDashboard[1][stat];
      var day2 = $scope.teamDashboard.daysRestTeamDashboard[2][stat];

      $scope.tsData = [
      {
        name: 'Overall',
        stat: oa
      },
      {
        name: 'In Wins',
        stat: w
      },
      {
        name: 'In Losses',
        stat: l
      },
      {
        name: 'At Home',
        stat: h
      },
      {
        name: 'On The Road',
        stat: a
      },
      {
        name: 'In October',
        stat: oct
      },
      {
        name: 'In November',
        stat: nov
      },
      {
        name: 'In December',
        stat: dec
      },
      {
        name: 'In January',
        stat: jan
      },
      {
        name: 'In February',
        stat: feb
      },
      {
        name: 'In Back To Backs',
        stat: b2b
      },
      {
        name: 'On One Day Rest',
        stat: day1
      },
      {
        name: 'On Two Days Rest',
        stat: day2
      }
    ];
    };

    $scope.updateData = function(){
      var length = $scope.myData.length;
      $scope.myData = [];
       for(var i = 0; i < length; i++){
         var obj = {
           name: 'name ' + i,
           stat: Math.floor((Math.random()*50)+1)
         };

         $scope.myData.push(obj);
       }
    };

    $scope.initTabs();

  }

  }

angular.module('nbaPlaygroundApp')
  .controller('MainController', MainController);

})();
